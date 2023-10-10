import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { CgClose } from "react-icons/cg";

export default function Project03() {
  const [btnState, setBtnState] = useState("close");

  return (
    <div className="bg-[#333] overflow-x-hidden m-0">
      {btnState === "open" ? (
        <div className="bg-[#fafafa] origin-top-left project03_container w-screen min-h-screen p-[50px] show-nav">
          <div className="fixed top-[-100px] left-[-100px]">
            <div className="project03_circle">
              {btnState === "close" ? (
                <button id="open" onClick={() => setBtnState("open")}>
                  <HiMenu />
                </button>
              ) : (
                <button id="close" onClick={() => setBtnState("close")}>
                  <CgClose />
                </button>
              )}
            </div>
          </div>
          <div className="max-w-[1000px] my-[50px] mx-auto">
            <h1 className="text-[2em] font-medium">Amazing Article</h1>
            <small className="italic text-[#555]">Florin Pop</small>
            <p className="text-[#333] leading-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium quia in ratione dolores cupiditate, maxime aliquid
              impedit dolorem nam dolor omnis atque fuga labore modi veritatis
              porro laborum minus, illo, maiores recusandae cumque ipsa quos.
              Tenetur, consequuntur mollitia labore pariatur sunt quia harum
              aut. Eum maxime dolorem provident natus veritatis molestiae cumque
              quod voluptates ab non, tempore cupiditate? Voluptatem, molestias
              culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor
              dignissimos in error placeat quae temporibus minus optio eum
              soluta cupiditate! Cupiditate saepe voluptates laudantium. Ducimus
              consequuntur perferendis consequatur nobis exercitationem
              molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.
            </p>
            <h3 className="text-[1.17em] font-medium my-[1em]">My Dog</h3>
            <img
              src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80"
              alt="doggy"
            ></img>
            <p className="my-[1em] leading-normal text-[#333]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              libero deleniti rerum quo, incidunt vel consequatur culpa ullam.
              Magnam facere earum unde harum. Ea culpa veritatis magnam at
              aliquid. Perferendis totam placeat molestias illo laudantium?
              Minus id minima doloribus dolorum fugit deserunt qui vero
              voluptas, ut quia cum amet temporibus veniam ad ea ab
              perspiciatis, enim accusamus asperiores explicabo provident.
              Voluptates sint, neque fuga cum illum, tempore autem maxime
              similique laborum odio, magnam esse. Aperiam?
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-[#fafafa] origin-top-left project03_container w-screen min-h-screen p-[50px]">
          <div className="fixed top-[-100px] left-[-100px]">
            <div className="project03_circle">
              {btnState === "close" ? (
                <button id="open" onClick={() => setBtnState("open")}>
                  <HiMenu />
                </button>
              ) : (
                <button id="close" onClick={() => setBtnState("close")}>
                  <CgClose />
                </button>
              )}
            </div>
          </div>
          <div className="max-w-[1000px] my-[50px] mx-auto">
            <h1 className="text-[2em] font-medium">Amazing Article</h1>
            <small className="italic text-[#555]">Florin Pop</small>
            <p className="text-[#333] leading-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium quia in ratione dolores cupiditate, maxime aliquid
              impedit dolorem nam dolor omnis atque fuga labore modi veritatis
              porro laborum minus, illo, maiores recusandae cumque ipsa quos.
              Tenetur, consequuntur mollitia labore pariatur sunt quia harum
              aut. Eum maxime dolorem provident natus veritatis molestiae cumque
              quod voluptates ab non, tempore cupiditate? Voluptatem, molestias
              culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor
              dignissimos in error placeat quae temporibus minus optio eum
              soluta cupiditate! Cupiditate saepe voluptates laudantium. Ducimus
              consequuntur perferendis consequatur nobis exercitationem
              molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.
            </p>
            <h3 className="text-[1.17em] font-medium my-[1em]">My Dog</h3>
            <img
              src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2100&amp;q=80"
              alt="doggy"
            ></img>
            <p className="my-[1em] leading-normal text-[#333]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              libero deleniti rerum quo, incidunt vel consequatur culpa ullam.
              Magnam facere earum unde harum. Ea culpa veritatis magnam at
              aliquid. Perferendis totam placeat molestias illo laudantium?
              Minus id minima doloribus dolorum fugit deserunt qui vero
              voluptas, ut quia cum amet temporibus veniam ad ea ab
              perspiciatis, enim accusamus asperiores explicabo provident.
              Voluptates sint, neque fuga cum illum, tempore autem maxime
              similique laborum odio, magnam esse. Aperiam?
            </p>
          </div>
        </div>
      )}
      <nav>
        <ul>
          <li>
            <i>
              <FaHome className="inline-block" />
            </i>
            HOME
          </li>
          <li>
            <i>
              <FaUserAlt className=" inline-block" />
            </i>
            ABOUT
          </li>
          <li>
            <i>
              <TbMailFilled className=" inline-block" />
            </i>
            CONTACT
          </li>
        </ul>
      </nav>
    </div>
  );
}
