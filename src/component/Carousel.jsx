import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import "./Carousel.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import Button from "./Button";
import { useStateContext } from "../contexts/ContextProvider";

const Carousel = ({ stacks }) => {
    const { mainColor, parameters, setParameters, deployDetail, setDeployDetail } = useStateContext();
    const [current, setCurrent] = useState(0);
    const [style, setStyle] = useState({
        marginLeft: `-${current}00%`
    });

    const activeIdx = "text-xl font-bold bg-yellow-100 text-yellow-800 rounded-full p-2";
    const prevIdx = "text-lg bg-green-100 text-green-800 rounded-full p-2";
    const normalIdx = "text-lg";

    const moveSlide = (i) => {
        setCurrent(Math.abs(current + i) % stacks.length);
    };

    useEffect(() => {
        setStyle({ marginLeft: `-${current}00%` });
    }, [current]);


    return (
        <>
            <div className="flex items-center">
                <div className="flex flex-col justify-between">
                    <div className="flex gap-4 mb-2">
                        <div className="flex items-center cursor-pointer text-2xl text-gray-600 border-1 p-2 rounded-full mr-2 bg-white" onClick={() => {
                            if (current !== 0) {
                                moveSlide(-1);
                            }
                        }}>
                            <MdKeyboardArrowLeft />
                        </div>

                        <div className="flex gap-4 justify-center items-center flex-1">
                            {stacks.map((x, i) => {
                                return (
                                    <div
                                        key={i}
                                        className={(
                                            i < current ? `${prevIdx}` : (
                                                i === current ? `${activeIdx}` : `${normalIdx}`
                                            )
                                        )}
                                    >
                                        {x.stack_type}
                                    </div>
                                )
                            })}
                        </div>

                        <div className="flex items-center cursor-pointer text-2xl text-gray-600 border-1 p-2 rounded-full mr-2 bg-white" onClick={() => {
                            if (current != stacks.length - 1) {
                                moveSlide(1);
                            }
                        }}>
                            <MdKeyboardArrowRight />
                        </div>
                    </div>
                    <div>
                        <div className="w-500 overflow-hidden">
                            <div className="flex items-start" style={style}>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Carousel;