import React from 'react';

type Video = {
  id: number;
  title: string;
  url: string;
};

type VideoCardProps = {
  video: Video;
};

const VideoCard: React.FC<VideoCardProps> = ({ video }) => (
  <div className="video-card">
    <h2>{video.title}</h2>
    <video controls>
      <source src={video.url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

const VideoPage: React.FC = () => {
  // Здесь вы можете получить список загруженных видео из API или из другого источника данных
  // Предположим, что у вас есть массив загруженных видео
  const uploadedVideos: Video[] = [
    {
      id: 1,
      title: 'Пример видео 1',
      url: 'https://example.com/video1.mp4',
    },
    {
      id: 2,
      title: 'Пример видео 2',
      url: 'https://example.com/video2.mp4',
    },
    // Добавьте другие видео, если необходимо
  ];

  return (
    <div className="video-page">
      <h1>Загруженные видео</h1>
      <div className="video-list">
        {uploadedVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
