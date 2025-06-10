// src/Components/ProjectModal.jsx
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";


// Este componente ProjectModal receberá props para controlar visibilidade e o conteúdo
export function ProjectModal({ project, openModal, onClose }) {
  if (!project) return null; // Não renderiza nada se não houver um projeto

  return (
    <Modal dismissible show={openModal} onClose={onClose}>
      <ModalHeader className="bg-[#A3A6B2]">
        {project.title} {/* Título do projeto */}
      </ModalHeader>
      <ModalBody className="bg-[#A3A6B2]" >
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-black dark:text-black">
            <strong>Sinopse:</strong> {project.synopsis}
          </p>
          <p className="text-base leading-relaxed text-black dark:text-black">
            <strong>Descrição:</strong> {project.description}
          </p>
          <p className="text-base leading-relaxed text-black dark:text-black">
            <strong>Stack:</strong> {project.stack.join(', ')}
          </p>
          {project.projectLink && (
            <p className="text-base leading-relaxed text-blue-800 hover:underline">
              <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                Ver Projeto Online
              </a>
            </p>
          )}
          {project.githubLink && (
            <p className="text-base leading-relaxed text-blue-800 hover:underline">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                Ver no GitHub
              </a>
            </p>
          )}
        </div>
      </ModalBody>
      <ModalFooter className="bg-[#A3A6B2]">
        <Button className="cursor-pointer bg-[#2B2E36] hover:bg-[#121217]" onClick={onClose}>Fechar</Button>
      </ModalFooter>
    </Modal>
  );
}


