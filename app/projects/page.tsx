'use client';

import useSWR from 'swr'; // 기본 가져오기


interface ProjectProps {
    id : number,
    type : string,
    title : string,
    description : string,
    thumbnail : string,
    startingDate : string,
    endDate : string,
    github_link? : string,
    notion_link? : string,
    demo? : string,
    env : string[]
}


// function getDate() {
//     `use server`;
//     const data = require(`/public/api/project.json`);
//     return data;
// }


//fetcher function : data를 불러와서 data를 리턴한다
export const fetcher = (url : string) => fetch(url).then((response) => response.json());


export default function Projects() {
    //const data = getDate();
    //console.log(`data`,data);
    const {data, error, mutate} = useSWR('/api/staticdata', fetcher);
    console.log(data);
//  /api/staticdata 500
//  /pages/api/staticdata 404

        return (

            <div>hi</div>
         );

}