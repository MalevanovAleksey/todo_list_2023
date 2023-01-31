import React from "react";
import { ListProps } from "../../interfaces/base/ListProps";
import { Button } from "./Button";
import classNames from "classnames";

const List: React.FC<ListProps> = ({
  items,
  listTitle,
  useDefaultClassName = true,
  className,
  activityIcon = false,
}) => {
  const [activeCategory, setActiveCategory] = React.useState<string>("Дом");

  React.useEffect(() => {
    console.log(activeCategory);
  }, [activeCategory]);

  const listClassNames = useDefaultClassName
    ? classNames(["base-list", className])
    : className;

  return (
    <div className="list__content">
      <span className="list__title">{listTitle}</span>
      <ul className={listClassNames}>
        {items.map((item, index) => (
          <li
            className="list__item"
            key={index}
            onClick={() => setActiveCategory(item.text)}
          >
            <div className="list__nav">
              <span className="icon">{item.icon}</span>
              <span className="text">{item.text}</span>
            </div>
            {activeCategory === item.text && activityIcon && (
              <div className="list__nav__indicator"></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
