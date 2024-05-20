'use client';
import useSWR from "swr";
import { Container } from "../components/Common";
import Loading from "../components/Loading";
import { ProjectList } from "../components/ProjectList";

//fetcher function : data를 불러와서 data를 리턴한다
export const fetcher = (url : string) => fetch(url).then((response) => response.json());

export default function Works() {

    const {data, error, isLoading} = useSWR('/api/staticdata', fetcher);

    return (
        <Container>
            {(isLoading || error)? <Loading /> : <ProjectList data={data.workProjects}/>}
        </Container>
    );
}