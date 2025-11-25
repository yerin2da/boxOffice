import MyDatePicker from "../../components/MyDatePicker";
import TailButton from "../../UI/TailButton";
import {useRecoilValue} from "recoil";
import {dateAtom, yesterdayAtom} from "../../recoil/atoms";
import { format } from "date-fns";
import { kobisBaseUrl, kobisApiKey, kmdbBaseUrl, kmdbApiKey } from "../../api/apiConfig";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {ImSpinner2} from "react-icons/im";
import NoResult from "../../components/NoResult";

export default function Main() {
    const [tdata, setTdata] = useState([]);
    const [movieDetail, setMovieDetail] = useState(null);
    const [moviePoster, setMoviePoster] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const date = useRecoilValue(dateAtom) ; // 날짜 가져오기
    const targetDt = format(date, "yyyyMMdd");// "20251120" 같은 문자열
    // console.log(targetDt);

    //영화 일별박스오피스
    const getFetchData = async () => {
        //URL 정의
        const url = `${kobisBaseUrl}/boxoffice/searchDailyBoxOfficeList.json?key=${kobisApiKey}&targetDt=${targetDt}`;

        setIsLoading(true);

        // 호출
        try{
            const { data } = await axios.get(url, {timeout : 5000});//5초);
            console.log(data);
            setTdata(data.boxOfficeResult.dailyBoxOfficeList || []);

        } catch (error){
            console.error('요청 시간이 초과되었습니다!');

        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getFetchData();
    }, []); // 빈 배열이면 최초 마운트 시 한 번만 실행


    //영화 상세정보 가져오기
    function show(movieCd, movieNm) {
        const fetchDetail = async () => {
            //URL 정의
            const url = `${kobisBaseUrl}/movie/searchMovieInfo.json?key=${kobisApiKey}&movieCd=${movieCd}`;
            const urlPoster = `${kmdbBaseUrl}/search_json2.jsp?collection=kmdb_new2&ServiceKey=${kmdbApiKey}&title=${movieNm}`;
            const defaultPoster = `${process.env.PUBLIC_URL}/img/default.jpg`;

            // 호출
            try{
                //상세정보
                const { data } = await axios.get(url, {timeout : 5000});//5초);
                setMovieDetail(data.movieInfoResult.movieInfo || []);

                //포스터
                const { data: dataPoster } = await axios.get(urlPoster, {timeout : 5000});//5초);
                const posterStr = dataPoster.Data[0]?.Result[0]?.posters || "";
                const posterArr = posterStr && posterStr.trim() !== ""
                                ? posterStr.split("|")
                                : [defaultPoster];
                setMoviePoster(posterArr[0]);

            }
            catch (error){
                console.error('요청 시간이 초과되었습니다!');
            }
        }
        fetchDetail();
    }

    // 메인페이지
    return (
        <div className='w-full'>

            {/*달력 검색창*/}
            <div className='flex gap-2'>
                <MyDatePicker/>
                <TailButton
                    handleClick={getFetchData}
                    caption={`검색`}
                    bcolor={`bg-mainColor`}
                />
            </div>

            {/* 영화 일별박스오피스 */}
            <div>
                {isLoading ? (
                    <div
                        className="flex flex-col items-center justify-center gap-2 py-20 text-gray-600 transition-opacity duration-700 opacity-100 pointer-events-none">
                        <ImSpinner2 className="animate-spin text-3xl text-gray-600"/>
                        <p>정보를 불러오고 있어요</p>
                    </div>
                ) : (
                    <div>
                        {tdata && tdata.length > 0 ? (
                            <ul className={`grid grid-cols-2 gap-x-2 gap-y-6 items-stretch`}>
                                {tdata.map((item, idx) => (
                                    <li key={idx}
                                        className="h-full flex cursor-pointer"
                                    >
                                        <a href="#"
                                              onClick={() => show(item.movieCd, item.movieNm)}
                                        >{item.rank}위 {item.movieNm}</a>
                                    </li>
                                ))}
                            </ul>

                        ) : (
                            <NoResult/>
                        )}

                    </div>
                )}
            </div>

            {/* 영화 상세정보 */}
            {movieDetail && (
                <div key={movieDetail.movieCd}>
                    {moviePoster && (
                        <img src={moviePoster} alt="무비포스터" />
                    )}
                    {movieDetail.movieNm}
                    {movieDetail.movieNmEn}
                    {movieDetail.showTm}
                    {movieDetail.openDt}
                </div>
            )}
        </div>
    );
};