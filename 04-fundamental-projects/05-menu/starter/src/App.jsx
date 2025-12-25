import { useEffect, useMemo, useState } from "react";
import Title from "./Title";
import data from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(data.map((d) => d.category))];

const App = () => {
  const [items, setItems] = useState(data || []);
  const [categories, setCategories] = useState(allCategories);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filterItems = (cat) => {
    if (cat === "all") return items;
    return items.filter((item) => item.category === cat);
  };
  const handleFilter = (cat) => {
    setSelectedCategory(cat);
  };

  const filteredItems = useMemo(() => {
    return filterItems(selectedCategory);
  }, [selectedCategory]);

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} onCategoryClick={handleFilter} />
        <div className="section-center">
          <Menu items={filteredItems} />
        </div>
      </section>
    </main>
  );
};
export default App;
