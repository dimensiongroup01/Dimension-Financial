'use client';

type StoryChapterProps = {
  label?: string;
  title: string;
  detail: string;
  extraDetail?: string;
};

export default function StoryChapter({ title, detail, extraDetail }: StoryChapterProps) {
  return (
    <section className="section-shell py-10 md:py-14">
      <article data-reveal className="story-chapter">
        <h2 className="story-title">{title}</h2>
        <p className="story-detail">{detail}</p>
        {extraDetail ? <p className="story-detail">{extraDetail}</p> : null}
      </article>
    </section>
  );
}
