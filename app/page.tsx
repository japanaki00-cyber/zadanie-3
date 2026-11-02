import ProductList from "@/components/catalog/ProductList";
import type { Product } from "@/types/product";

const products: Product[] = [
  {
    id: 1,
    title: "Кофе Бразилия Сантос",
    description: "Зёрна средней обжарки с нотами шоколада и ореха, 250 г.",
    price: 690,
    category: "Кофе",
    inStock: true,
  },
  {
    id: 2,
    title: "Кофе Эфиопия Иргачефф",
    description: "Светлая обжарка, цветочный аромат и лёгкая кислинка, 250 г.",
    price: 790,
    category: "Кофе",
    inStock: true,
  },
  {
    id: 3,
    title: "Кофе Колумбия Супремо",
    description: "Сбалансированный вкус с карамельной сладостью, 250 г.",
    price: 720,
    category: "Кофе",
    inStock: false,
  },
  {
    id: 4,
    title: "Молотый кофе для турки",
    description: "Мелкий помол, насыщенный вкус и густая пенка, 200 г.",
    price: 450,
    category: "Кофе",
    inStock: true,
  },
  {
    id: 5,
    title: "Чай Эрл Грей",
    description: "Классический чёрный чай с бергамотом, 100 г.",
    price: 380,
    category: "Чай",
    inStock: true,
  },
  {
    id: 6,
    title: "Чай Сенча",
    description: "Японский зелёный чай со свежим травяным вкусом, 100 г.",
    price: 420,
    category: "Чай",
    inStock: true,
  },
  {
    id: 7,
    title: "Матча церемониальная",
    description: "Порошковый зелёный чай для латте и напитков, 50 г.",
    price: 950,
    category: "Чай",
    inStock: true,
  },
  {
    id: 8,
    title: "Френч-пресс 600 мл",
    description: "Стеклянная колба и металлический фильтр для заваривания.",
    price: 1900,
    category: "Аксессуары",
    inStock: true,
  },
  {
    id: 9,
    title: "Кофемолка ручная",
    description: "Керамические жернова и регулировка степени помола.",
    price: 2900,
    category: "Аксессуары",
    inStock: false,
  },
  {
    id: 10,
    title: "Керамическая чашка",
    description: "Чашка 250 мл с двойными стенками, держит тепло.",
    price: 850,
    category: "Посуда",
    inStock: true,
  },
  {
    id: 11,
    title: "Термокружка 450 мл",
    description: "Нержавеющая сталь, до 8 часов сохраняет температуру.",
    price: 1500,
    category: "Посуда",
    inStock: true,
  },
  {
    id: 12,
    title: "Питчер для молока",
    description: "Стальной кувшин 350 мл для взбивания молока.",
    price: 1100,
    category: "Аксессуары",
    inStock: true,
  },
];

export default function CatalogPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Каталог товаров</h1>
      <p className="mt-2 text-muted-foreground">
        Кофе, чай и аксессуары для вашего дома
      </p>

      <ProductList products={products} />
    </main>
  );
}