import React from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import {useRecoilState, useRecoilValue} from "recoil";
import {dateAtom, yesterdayAtom} from "../recoil/atoms";
import "react-datepicker/dist/react-datepicker.css";
export default function MyDatePicker() {
    const [date, setDate] = useRecoilState(dateAtom);//날짜 전달, 기록

    const yesterday = useRecoilValue(yesterdayAtom);
    return (
        <div>
            <DatePicker
                selected={date}
                onChange={(d) => setDate(d)}
                locale={ko}
                dateFormat="yyyy.MM.dd.(eee)"
                maxDate={yesterday}  // 오늘 이후 날짜 선택 불가
                renderCustomHeader={({
                                         date,
                                         decreaseMonth,
                                         increaseMonth,
                                         prevMonthButtonDisabled,
                                         nextMonthButtonDisabled,
                                     }) => (
                    <div className="flex justify-between items-center px-2 py-1">
                        {/*좌측 화살표*/}
                        <button
                            onClick={decreaseMonth}
                            disabled={prevMonthButtonDisabled}
                        >
                            &lt;
                        </button>
                        
                        {/*년, 월*/}
                        {format(date, "yyyy년 M월", { locale: ko })}

                        {/*우측 화살표*/}
                        <button
                            onClick={increaseMonth}
                            disabled={nextMonthButtonDisabled}
                        >
                            &gt;
                        </button>
                    </div>
                )}
            />

        </div>
    );
}