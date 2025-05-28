import React from "react";
import { Card, CardBody, CardFooter, Image, Button, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  repoUrl: string;
}

export const ProjectCard = ({ title, description, tags, image, demoUrl, repoUrl }: ProjectCardProps) => {
  // Generate a unique ID for each image
  const uniqueId = React.useMemo(() => Math.floor(Math.random() * 100), []);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="border border-divider" isHoverable>
        <CardBody className="p-0 overflow-hidden">
          <Image
            alt={title}
            className="w-full object-cover h-48"
            src={`https://img.heroui.chat/image/${image}?w=600&h=400&u=${uniqueId}`}
          />
        </CardBody>
        <CardBody className="pb-0">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-default-500 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <Chip key={index} size="sm" variant="flat" color="primary">
                {tag}
              </Chip>
            ))}
          </div>
        </CardBody>
        <CardFooter className="flex gap-2">
          <Button 
            as="a" 
            href={demoUrl} 
            target="_blank" 
            color="primary" 
            variant="flat" 
            size="sm"
            startContent={<Icon icon="lucide:external-link" width={16} />}
          >
            Demo
          </Button>
          <Button 
            as="a" 
            href={repoUrl} 
            target="_blank" 
            variant="light" 
            size="sm"
            startContent={<Icon icon="lucide:github" width={16} />}
          >
            Código
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};