'use client';

import styled from "styled-components";

export const InfoTxt = styled.span`
    font-size: 24px;
    color: #95afc0;
    font-weight: bold;
    &:hover {
        color: #4834d4;
        cursor: pointer;
    }
    
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center; 
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
                    <InfoTxt>🪪 정다솜</InfoTxt>
                    <InfoTxt>📞 010-8072-9501</InfoTxt>
                    <InfoTxt>📩 jdsss2634@gmail.com</InfoTxt>
                    <InfoTxt><a href="https://github.com/racheljeong">🗝️ Github</a></InfoTxt>
                    <InfoTxt><a href="https://www.notion.so/Jeong-Dasom-62a74a097ba44cbbb5cfee84c4dd4f59">📚 Notion / Blog </a></InfoTxt>
                </div>
            </ContentContainer>
        </Container>
    );
}
