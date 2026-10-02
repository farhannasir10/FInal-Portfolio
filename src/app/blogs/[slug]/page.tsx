import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

const slugMap: Record<string, string> = {
  "event-marketplace-case-study": "event-marketplace",
  "eluxe3d-case-study": "eluxe3d",
};

export default async function BlogSlugRedirectPage({ params }: Props) {
  const { slug } = await params;
  redirect(`/case-studies/${slugMap[slug] ?? slug}`);
}
