"use client"
import { Image as MedusaImage } from "@medusajs/medusa"
import { Container } from "@medusajs/ui"
import { useState } from "react"
import {
  Accordion,
  AccordionItem,
  Button,
  Chip,
  Image,
  Link,
  RadioGroup,
  ScrollShadow,
} from "@nextui-org/react"

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0])
  return (
    <div className="relative flex-none w-full h-full">
      <Image
        alt="Product image"
        className="w-full h-full rounded-lg"
        src={selectedImage.url}
      />
      <ScrollShadow
        className="flex w-full max-w-full gap-4 px-2 pt-2 pb-4 mt-4 -mx-2 -mb-4"
        orientation="horizontal"
      >
        {images.map((image, index) => (
          <button
            id={image.id}
            key={image.id}
            className="relative h-24 w-24 flex-none cursor-pointer items-center justify-center rounded-medium ring-offset-background transition-shadow data-[selected=true]:outline-none data-[selected=true]:ring-2 data-[selected=true]:ring-focus data-[selected=true]:ring-offset-2"
            data-selected={image === selectedImage}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              removeWrapper
              alt={`Product image ${index + 1}`}
              classNames={{
                img: "h-full w-full",
              }}
              radius="lg"
              src={image.url}
            />
          </button>
        ))}
      </ScrollShadow>
    </div>
  )
}

export default ImageGallery
