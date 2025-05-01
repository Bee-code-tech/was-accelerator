interface VideoProofField {
  name: string
  title: string
  type: string
  validation?: (Rule: any) => any
  options?: any
}

interface VideoProofSchema {
  name: string
  title: string
  type: string
  fields: VideoProofField[]
}

const videoProofSchema: VideoProofSchema = {
  name: 'videoProof',
  title: 'Video Proof',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'videoFile',
      title: 'Upload Video',
      type: 'file',
      options: {
        accept: 'video/mp4',
      },
    },
  ],
}

export default videoProofSchema
