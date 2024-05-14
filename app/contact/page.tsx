'use client';

import styled from "styled-components";
import { Container } from "../components/Common";

export const InfoTxt = styled.span`
    font-size: 24px;
    color: #95afc0;
    font-weight: bold;
    &:hover {
        color: #4834d4;
        cursor: pointer;
    }
    
`;


const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: whitesmoke;
    border-radius: 10px;
    padding: 20px;
    margin: 5px;
    margin-top: 100px;
    @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
    }
`;

export default function Contact() {
    return (
        <Container>
            <ContentContainer>
                <div className="left-2 size-72 rounded-lg align-middle justify-center flex py-5">
                    <img src="/img/dasom_qr_pp.jpg" alt="profile" />
                </div>
                <div className="flex flex-col gap-3 py-5">
                    <InfoTxt>정다솜</InfoTxt>
                    <InfoTxt>   
                        010-8072-9501
                    </InfoTxt>
                    <InfoTxt>
                        <svg className="inline-block" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" 
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 
                                0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 
                                0 0-3.27-1.64z">
                            </path>
                        </svg> jdsss2634@gmail.com
                    </InfoTxt>
                    <InfoTxt>
                        <a href="https://www.linkedin.com/in/dasom-jeong-6317921a4/">
                        <svg className="inline-block" stroke="currentColor" fill="currentColor" strokeWidth="0" 
                            viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 
                                    18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 
                                    1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z">
                            </path>
                        </svg>
                        LinkedIn
                        </a>
                    </InfoTxt>
                    <InfoTxt>
                    <a href="https://github.com/racheljeong">
                    <svg className="inline-block" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" 
                        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" 
                                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 
                                9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07
                                1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64
                                0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024
                                1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974
                                22 6.465 17.535 2 12.026 2z">
                            </path>
                    </svg>
                    Github
                    </a>
                    </InfoTxt>
                    <InfoTxt><a href="https://www.notion.so/Jeong-Dasom-62a74a097ba44cbbb5cfee84c4dd4f59">Notion / Blog </a></InfoTxt>
                </div>
            </ContentContainer>
        </Container>
    );
}
