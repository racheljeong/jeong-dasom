import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import useSWR from "swr";
import Loading from "../components/Loading";

interface ProjectProps {
  id: number;
  type: string;
  title: string;
  description: string;
  thumbnail: string;
  startingDate: string;
  endDate: string;
  github_link?: string;
  notion_link?: string;
  demo?: string;
  env: string[];
}

export const Wrapper = styled.div`
  background-color: #4834d4;
  padding: 20px;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 두 개의 열로 구성
  gap: 20px;
`;

export const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  padding: 20px;
`;

export const ProjectInfo = styled.div`
  opacity: 0;
  transition: opacity 0.3s;
`;

export const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function ProjectList ({ data } : { data: ProjectProps[]}) {

  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);

  return (
    <>
      <ProjectGrid>
        {data.map((project) => (
          <ProjectCard
            key={project.id}
            onClick={() => setSelectedProject(project)}
            whileHover={{ scale: 1.05 }}
          >s
            <h3>{project.title}</h3>
            <ProjectInfo>{project.description}</ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectGrid>
      <AnimatePresence>
        {selectedProject && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                width: "80%",
              }}
              onClick={(e) => e.stopPropagation()} // 모달 바깥을 클릭했을 때 닫히게 함
            >
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
              {selectedProject.github_link && (
                <p>
                  GitHub:{" "}
                  <a href={selectedProject.github_link} target="_blank" rel="noopener noreferrer">
                    {selectedProject.github_link}
                  </a>
                </p>
              )}
              {selectedProject.notion_link && (
                <p>
                  Notion:{" "}
                  <a href={selectedProject.notion_link} target="_blank" rel="noopener noreferrer">
                    {selectedProject.notion_link}
                  </a>
                </p>
              )}
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};