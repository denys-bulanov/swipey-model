import axios from 'axios'

export const getCharacter = async (slug: string) => {
  const { data } = await axios.get(`https://${process.env.NEXT_PUBLIC_URL}/api/v1/characters/public-profile?slug=${slug}`)
  const previewVideo = data.meta?.previews?.find((item: string) => item.includes('video_preview.mp4')) ?? null
  return {
    name: data.name,
    age: data.age,
    data,
    picture: data.meta?.previews?.[0] ?? null,
    price: data.amountInUsd ?? null,
    verified: data.type ?? null,
    slug: data.slug ?? null,
    previewVideo: previewVideo,
  }
}
