import Home from '@/src/components/pages/Home/Home'
import HomeLayout from '@/src/layouts/HomeLayout'

type Props = {
  params: { slug: string }
}

export default async function HomePage({ params }: Props) {
  return (
    <HomeLayout>
      <Home />
    </HomeLayout>
  )
}
