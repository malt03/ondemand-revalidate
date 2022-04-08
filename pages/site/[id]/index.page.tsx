import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router'

type Props = { time: string };

export const getStaticProps: GetStaticProps<Props> = () => ({ props: { time: new Date().toISOString() } });
export const getStaticPaths: GetStaticPaths = () => ({ paths: [], fallback: "blocking" });
const Page = (props: Props) => {
  const router = useRouter();
  
  return <p>{router.locale}{router.query.id}: {props.time}</p>;
};

export default Page;
