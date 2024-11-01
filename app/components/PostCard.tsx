interface PostCardProps {
    title: string;
    date: string;
    summary: string;
  }
  
  export default function PostCard({ title, date, summary }: PostCardProps) {
    return (
      <div className="p-5 border rounded-md">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{date}</p>
        <p>{summary}</p>
      </div>
    );
  }
  