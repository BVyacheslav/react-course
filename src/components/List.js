import Article from "./Article";
import Video from "./Video";

export function List(props) {
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        return (
          <Video key={item.url} {...item} />
        );

      case 'article':
        return (
          <Article key={item.title} {...item} />
        );
    }
  });
};