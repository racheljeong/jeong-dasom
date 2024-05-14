"use client";


import styled from "styled-components";
import { motion} from "framer-motion";
import Link from "next/link";
import {useMatch, useMatches } from "react-router-dom";
import { useRouter, usePathname } from "next/navigation";
import { ReactHTMLElement } from "react";



// const Col = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Items = styled.ul`
//   display: flex;
//   align-items: center;
// `;

const Item = styled.li`
  margin-right: 20px;
  font-size: 21px;
  text-decoration: solid;
  font-family: auto;
  color: ${props => props.theme.textColor};
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: whitesmoke;
    text-shadow: 3px 3px 4px "#95afc0";
    scale : 1.2;
    transition: 0.2s;
  }
`;

const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: red;
`;

export default function Header() {

    const path = usePathname();

    return(
      <div className="z-10 w-full fixed items-center justify-between text-lg text-whitesmoke 
                      font-mono py-7 px-5 border-b border-gray-300 lg:flex">
          <ul className="flex align-middle">
              <Item>
                  <Link href ="/contact" >Contact{path === "/contact" && <Circle layoutId="circle"/>}</Link>
              </Item>
              <Item>
                  <Link href ="/works">Works{path === "/works" && <Circle layoutId="circle"/>}</Link>
              </Item>
              <Item>
                  <Link href ="/projects">Projects{path === "/projects" && <Circle layoutId="circle"/>}</Link>
              </Item>
          </ul>
        </div>

    );
}