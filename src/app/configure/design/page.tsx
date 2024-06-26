import DesignConfigurator from "@/components/DesignConfigurator"
import { db } from "@/db"
import { notFound } from "next/navigation"

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}
async function Page({searchParams}: PageProps) {
    const {id} = searchParams
    if(!id || typeof id !== "string"){
      return notFound()
    }

    const configuration = await db.configuration.findUnique({
      where: {
        id
      }
    })

    if( !configuration){
      return notFound()
    }

    const {imageUrl,height,width } = configuration
  return <DesignConfigurator configId={configuration.id} imageUrl={imageUrl} imageDimensions={{
    width,height
  }} /> 
}

export default Page
