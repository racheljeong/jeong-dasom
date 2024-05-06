"use client";


import styled from "styled-components";
import { motion} from "framer-motion";
import Link from "next/link";
import {useMatch, useMatches } from "react-router-dom";
import { useRouter, usePathname } from "next/navigation";
import { ReactHTMLElement } from "react";



const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin-right: 20px;
  font-size: 16px;
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
    scale : 1.2;
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
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-center text-lg text-whitesmoke border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <Col>
        <Items>
            <Item>
                <Link href ="/contact" >Contact{path === "/contact" && <Circle layoutId="circle"/>}</Link>
            </Item>
            <Item>
                <Link href ="/about">About{path === "/about" && <Circle layoutId="circle"/>}</Link>
            </Item>
            <Item>
                <Link href ="/projects">Projects{path === "/projects" && <Circle layoutId="circle"/>}</Link>
            </Item>
        </Items>
        </Col>
        <Col>
         <Items>
            Jeong Dasom
          </Items>
        </Col>
        </div>
      </div>
    );
}