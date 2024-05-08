
import path from 'path';
import { promises as fs } from 'fs';

//API 핸들러 파일을 생성 :  Next.js에서 API 엔드포인트를 위한 전용 디렉토리
// ->  실제로 JSON 파일을 읽고 클라이언트 요청에 응답

export default async function handler(req, res) {
    // 'public' 디렉토리의 'project.json' 파일 경로
    const filePath = path.join(process.cwd(), 'json');
    // 파일을 동기적으로 읽기
    console.log(`filePath`,filePath);
    const data = await fs.readFile(filePath + '/data.json', 'utf8');
    // HTTP 응답으로 JSON 데이터 반환
    res.status(200).json(JSON.parse(data));
}

