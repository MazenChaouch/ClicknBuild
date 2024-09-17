export const Section2 = () => {
  return (
    <div className="bg-custom-gradient flex max-w-full flex-col items-center justify-center gap-20 py-24">
      <p className="text-7xl text-white">Video about ClicknBuild</p>
      <video
        className="w-2/3 rounded-3xl"
        src="https://utfs.io/f/k3v076LN5u0l9GUddvaA4LQ2NZyedrfjDTXJoVmOai3u7UMW"
        controlsList="play"
        controls
      />
    </div>
  );
};
