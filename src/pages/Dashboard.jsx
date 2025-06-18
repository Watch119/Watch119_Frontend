import axios from "axios";
import React, { useEffect, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { AiFillDatabase, AiTwotoneCloud } from "react-icons/ai";
import { TbPackageExport } from 'react-icons/tb';


const IframeEmbed = (link) => {
    return <iframe
        className="w-full h-full"
        src={`http://localhost:3000${link.link}&theme=light`}></iframe>
}

const Dashboard = () => {
    const { base_url, mainColor } = useStateContext();
    const [status, setStatus] = useState({});

    const inst = "i-03deab673045bef9b";


    const monitoringDiv = "bg-white border-2 rounded-xl w-160 flex-1 p-4 flex justify-between"
    return (
        <>
            <div className="flex flex-col p-6 gap-6 h-full">
                {/* 상단바 */}
                <div className="flex gap-6 h-1/5 justify-between">
                    <div className={monitoringDiv}>
                        <div>
                            <div className="font-bold text-lg mb-3">인스턴스</div>
                            <div className="text-3xl flex flex-1 items-center">개</div>
                        </div>
                        <div className="flex items-center">
                            <div className="rounded-full p-2 text-6xl" style={{ color: `${mainColor}` }}>
                                <AiTwotoneCloud />
                            </div>
                        </div>
                    </div>
                    <div className={monitoringDiv}>
                        <div>
                            <div className="font-bold text-lg mb-3">스택</div>
                            <div className="text-3xl flex flex-1 items-center">개</div>
                        </div>
                        <div className="flex items-center">
                            <div className="rounded-full p-2 text-6xl">
                                <AiFillDatabase />
                            </div>
                        </div>
                    </div>
                    <div className={monitoringDiv}>
                        {/* <div className="font-bold text-lg mb-3">배포</div>
                        <div className="text-3xl flex flex-1 items-center">{status.deploy_count}개</div> */}
                        <div>
                            <div className="font-bold text-lg mb-3">배포</div>
                            <div className="text-3xl flex flex-1 items-center">개</div>
                        </div>
                        <div className="flex items-center">
                            <div className="rounded-full p-2 text-6xl">
                                <TbPackageExport />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white border-2 rounded-xl w-160 flex-1 p-4">
                        <div className="font-bold text-lg mb-3">
                            시스템 연결 상태 (양호)
                        </div>
                        <div className="flex gap-1 flex-wrap justify-center items-center">
                        </div>
                    </div>
                </div>
                {/* 상단바 */}

                {/* 대시보드 */}
                <div className="flex gap-6 flex-1">
                    <div className="bg-white border-2 rounded-xl w-3/5 p-4 flex-col flex">
                        <div className="flex justify-between items-center">
                            <div className="font-bold text-lg">
                                CPU
                            </div>
                        </div>
                        <div className="flex flex-1 mt-4 rounded-xl justify-center items-center">
                            <div className="w-full h-full flex justify-center items-center">
                                <span>인스턴스를 선택하세요</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 gap-4 flex flex-col">
                        <div className="bg-white rounded-xl border-2 h-1/2 p-4 flex-col flex">
                            <div className="font-bold text-lg">
                                Network
                            </div>
                            <div className="flex flex-1 rounded-xl mt-2 justify-center items-center">
                                <div className="w-full h-full flex justify-center items-center">
                                    <span>인스턴스를 선택하세요</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl border-2 h-1/2 p-4 flex-col flex">
                            <div className="font-bold text-lg">
                                CloudWatch 지표
                            </div>
                            <div className="flex flex-1 rounded-xl mt-2 justify-center items-center">
                                <div className="w-full h-full flex justify-center items-center">
                                    <span>인스턴스를 선택하세요</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 대시보드 */}
            </div>
        </>
    );
};

export default Dashboard;