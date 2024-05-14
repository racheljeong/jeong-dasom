'use client';

import useSWR from 'swr'; // 기본 가져오기
import Loading from '../components/Loading';
import { Container, Wrapper } from '../components/Common';
import { ProjectList } from '../components/ProjectList';


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
    const {data, error, isLoading} = useSWR('/api/staticdata', fetcher);
    // if(!isLoading || !error){
    //     console.log('got this')
    //     const results = data.projects;
    //     console.log(results);
    // }

        return (

            <Container>
                {(isLoading || error)? <Loading /> : <ProjectList data={data.projects}/>}
            </Container>
         );

}