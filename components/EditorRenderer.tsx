import React from 'react';

const matchHttp = (url) => {
  return url.includes('http') ? url : `http://${url}`;
};

const EditorRenderer = ({ data }) => {
  const _getTextSizeByLevel = (level) => {
    switch (level) {
      case 1:
        return 'text-2xl';
      case 2:
        return 'text-xl';
      case 3:
        return 'text-lg';
      case 4:
        return 'text-base';
      case 5:
        return 'text-sm';
      case 6:
        return 'text-xs';
      default:
        return 'text-base';
    }
  };

  return (
    <div>
      {data.map((item) => {
        if (item.type === 'header') {
          return (
            <div key={item.id} className="mt-2">
              <span
                className={`${_getTextSizeByLevel(item.data.level)} font-bold`}
              >
                {item.data.text}
              </span>
            </div>
          );
        } else if (item.type === 'image') {
          return (
            <div key={item.id} className="mt-2">
              <figure>
                <img
                  className="w-full rounded-lg"
                  src={item.data.url}
                  alt=""
                  width={1310}
                  height={873}
                />
                <figcaption className="text-gray-900 dark:text-gray-100 mt-1">
                  {item.data.caption}
                </figcaption>
              </figure>
            </div>
          );
        } else if (item.type === 'paragraph') {
          return (
            <div key={item.id} className="mt-2 custom_anchor">
              <base target="_blank" />
              <div
                className="text-left"
                dangerouslySetInnerHTML={{ __html: item.data.text }}
              />
            </div>
          );
        } else if (item.type === 'list') {
          if (item.data.style === 'unordered') {
            return (
              <div key={item.id} className="mt-2">
                <ul>
                  {item.data.items.map((item, index) => {
                    return (
                      <li key={index}>
                        <div
                          className="text-left"
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          } else if (item.data.style === 'ordered') {
            return (
              <div key={item.id} className="mt-2">
                <ol>
                  {item.data.items.map((item, index) => {
                    return (
                      <li key={index}>
                        <div
                          className="text-left"
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      </li>
                    );
                  })}
                </ol>
              </div>
            );
          }
        } else if (item.type === 'linkTool') {
          return (
            <a
              key={item.id}
              className="flex mt-2 w-full border rounded-md p-2 cursor-pointer justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-500"
              href={matchHttp(item.data.link)}
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
              {item.data.link}
            </a>
          );
        } else if (item.type === 'delimiter') {
          return (
            <div key={item.id} className="relative mt-4 mb-4">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-300 dark:border-gray-500" />
              </div>
              <div className="relative flex justify-center">
                {/* <span className="px-2 bg-white dark:bg-gray-700 text-sm text-gray-500 dark:text-gray-400">
                Tarjeta
              </span> */}
              </div>
            </div>
          );
        } else if (item.type === 'quote') {
          return (
            <div key={item.id} className={'relative mt-4 mb-4 italic'}>
              <blockquote>
                <p
                  className={`${
                    item.data.alignment === 'left' ? 'text-left' : 'text-center'
                  }`}
                >
                  {item.data.text}
                </p>
                <p
                  className={`${
                    item.data.alignment === 'left' ? 'text-left' : 'text-center'
                  }`}
                >
                  {item.data.caption}
                </p>
              </blockquote>
            </div>
          );
        }
      })}
    </div>
  );
};

export default EditorRenderer;
