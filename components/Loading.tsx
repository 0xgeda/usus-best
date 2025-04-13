export default function Loading() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="relative">
        <div className="h-12 w-12">
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <div className="h-full w-full rounded-full border-2 border-gray-200 dark:border-gray-700"></div>
            <div className="absolute top-0 left-0 h-full w-full rounded-full border-2 border-blue-500 border-t-transparent animate-spin"></div>
          </div>
        </div>
        <span className="sr-only">加载中...</span>
      </div>
    </div>
  );
}
