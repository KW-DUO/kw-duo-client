import React from 'react';
import Footer from './../../components/footer/Footer';

import { Search } from 'lucide-react';
import Image from 'next/image';

const userImageURL = '/icons/user_card_icon.svg';

const Chatting = () => {
  return (
    <>
      <main className="max-w-[1300px] py-10 mx-auto">
        <section className="border border-gray flex flex-1 h-lvh bg-[#fffbfb]">
          {/* 왼쪽 채팅방 */}
          <div className="w-[280px] border ">
            <label className="flex items-center border h-14 py-4 px-5 bg-white">
              <input type="text" placeholder="검색어를 입력하세요." className="outline-none" />
              <Search className="cursor-pointer" />
            </label>

            {/* 채팅방 */}
            <div>
              <ul>
                <li className="p-5 h-[100px] flex items-center border bg-white">
                  <div>
                    <Image
                      src={userImageURL}
                      alt="user-image"
                      width={60}
                      height={60}
                      className="shadow-md rounded-full"
                    />
                    <div></div>
                    {/* 접속 중인지 확인하는 거 추가하면 좋을듯 */}
                  </div>
                  <div className="pl-3 w-[144px]">
                    <div className="font-bold">닉네임</div>
                    <h5 className="line-clamp-1">
                      <span>안녕하세요! 000 팀프로젝트123123123</span>
                    </h5>
                  </div>
                </li>
                <li className="p-5 h-[100px] flex items-center border bg-gray">
                  <div>
                    <Image
                      src={userImageURL}
                      alt="user-image"
                      width={60}
                      height={60}
                      className="shadow-md rounded-full"
                    />
                    <div></div>
                    {/* 접속 중인지 확인하는 거 추가하면 좋을듯 */}
                  </div>
                  <div className="pl-3 w-[144px]">
                    <div className="font-bold flex gap-2">
                      닉네임{' '}
                      <span>
                        <Image
                          src={'/icons/Algorithm Tier/platinum_4.png'}
                          alt="알고리즘 티어"
                          width={20}
                          height={20}
                        />
                      </span>
                    </div>
                    <h5 className="line-clamp-1">
                      <span>안녕하세요!</span>
                    </h5>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* 현재 채팅방 */}
          <div className="w-full flex flex-col">
            <div className="flex-1"></div>
            {/* 채팅 밑 */}
            <div className="w-full h-[144px] border p-5 bg-white">
              <div>
                <input type="text" className="pl-5 outline-none border w-full h-14 mb-3 rounded" />
                <button className="w-20 h-10 bg-gray text-silver font-bold rounded float-right">
                  전송
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Chatting;
