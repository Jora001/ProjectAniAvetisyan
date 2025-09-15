import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ChatbotSlideIn from "@/components/ChatbotSlideIn";
// import { useEffect, useRef } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  image: string;
  details?: string;
  usage?: string;
  ingredients?: string;
  benefits?: string[];
};




const Services = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: "Био-Активный Полный  Мультивитамин для Мужчин",
      category: "Vitamins",
      price: "$9.5",
      originalPrice: "$25",
      rating: 5,
      reviews: 2543,
      description: "",
      features: [
        "24 Витамина и Минерала",
        "Поддержка Иммунной и Сердечно-сосудистой Системы",
        "Способствует Здоровому Старению",
      ],
      image: "/assets/multi-vitamin-men_front.png",
      details: "Большинство мужчин не получают достаточного количества витаминов и минералов со своим повседневным питанием. Эти дефициты витаминов могут вызвать проблемы со здоровьем. LiveGood BioActive Complete Multivitamin разработан с использованием ингредиентов высочайшего качества.",
    },
    {
      id: 2,
      name: "Био-Активный Мультивитамин для Женщин с Железом",
      category: "Nutrition",
      price: "$9.5",
      originalPrice: "$25.7",
      rating: 5,
      reviews: 1876,
      description: "",
      features: [
        "24 Витамина и Минерала",
        "Поддержка Иммунной и Сердечно-сосудистой Системы",
        "Способствует Здоровому Старению",
      ],
      image: "/assets/multi-vitamin-women_front.png",
      details: "Большинство женщин не получают достаточного количества витаминов и минералов. Наш Мультивитамин для женщин содержит железо высочайшего качества. Помогает укрепить иммунную систему, поддерживать здоровье сердца и сосудов, снижать уровень стресса и тревожности, сохранять хорошее зрение и крепкие кости.",
    },
    {
      id: 3,
      name: "LEAN – Формула для Улучшения Состава Тела",
      category: "Nutrition",
      price: "$19.95",
      originalPrice: "$24.95",
      rating: 5,
      reviews: 3876,
      description: "",
      features: [
        "Поддержка Контроля Веса",
        "Ускорение Метаболизма",
        "Эффективное Естественное Снижение Жировой Массы Организма",
      ],
      image: "/assets/lean-body-front.png",
      details: "LEAN решает все критические процессы для достижения быстрых и долговременных результатов по контролю веса. Содержит высококачественные ингредиенты: витамин B12, экстракт зеленого чая, L-карнитин и другие.",
    },

{
      id: 4,
      name: "Органический Кофе",
      category: "Nutrition",
      price: "$17.95",
      originalPrice: "$30.95",
      rating: 5,
      reviews: 5876,
      description: "",
      features: [
        "Поддержка Здорового Настроения",
        "Концентрация и Ясность Мысли Снижение Веса",
        "Функциональные Грибы",
                "Превосходный Вкус!",

      ],
      image: "/assets/organic-coffee_front.png",
      details: " доровый Органический Кофе для Контроля Веса с Грибами Да, это, вероятно, самое длинное название кофе, которое вы когда-либо видели. Но правда в том, что с таким количеством удивительных полезных свойств и ингредиентов, которые мы вложили в этот бленд, мы могли бы добавить ещё больше слов: адаптогены, зелёный чай, полезные волокна, мака и, конечно же, невероятно вкусный! LiveGood Organic Coffee не только сочетает ингредиенты высочайшего качества из самых чистых, природных и богатых мест планеты, но и является ПЕРВЫМ и ЕДИНСТВЕННЫМ кофе, обогащённым полезными волокнами для уменьшения голода, с мака для поддержки обучения и памяти и улучшения настроения, с зелёным чаем для здоровой работы мозга и стимуляции сжигания жира, а также адаптогенами в виде шести самых мощных грибов мира, чтобы снизить стресс, поддерживать здоровье организма и улучшать самочувствие! Ни один другой кофе на планете не даёт столько пользы, как LiveGood Healthy Organic Weight Management Coffee с Грибами 😊 С первого глотка нашего вкусного бленда и после того, как вы ощутите удивительные результаты, вы, возможно, больше никогда не захотите пить другой кофе! Просто размешайте одну ложку нашего вкусного растворимого кофе в чашке горячей воды и наслаждайтесь.",
    },


{
      id: 5,
      name: "Органические Супер-Зелени",
      category: "Nutrition",
      price: "$18",
      originalPrice: "$25․5",
      rating: 5,
      reviews: 3921,
      description: "",
      features: [
        "Защита Иммунной Системы",
        "Энергия и Восстановление",
        "Поддержка при Стрессе",
                "Здоровье Пищеварительной Системы",

      ],
      image: "/assets/super-greens_front-2025.png",
      details: " Органические Супер-Зелени Ваш страховочный щит для здоровья! Употребление органических, свежих, чистых фруктов и овощей помогает поддерживать нормальное кровяное давление, правильную работу кишечника и обеспечивает мозг всеми необходимыми питательными веществами для выполнения важных функций. Без них могут возникнуть различные проблемы со здоровьем: расстройства пищеварения, ослабленный иммунитет, недостаток энергии, депрессия и даже набор веса. LiveGood Organic Super Greens — это как страховочная сеть для вашего здоровья, восполняющая пробелы в питании, которые не получает наш организм с обычной едой. Поскольку наши тела никогда не перестают работать, им необходимо давать максимально питательные продукты. И ничто не подходит для этой цели лучше, чем LiveGood Super Greens. Помогает улучшить пищеварение, поддержать иммунитет, повысить уровень энергии и чувствовать себя более бодрым всего лишь с одной вкусной порцией каждый день!",
    },
   



    {
      id: 6,
      name: "E3 – Энергия, Выносливость, Электролиты",
      category: "Nutrition",
      price: "$18",
      originalPrice: "$27․5",
      rating: 5,
      reviews: 7630,
      description: "",
      features: [
        "Мгновенная энергия, которая держится часами",
        "Электролиты для производительности и восстановления",

      ],
      image: "/assets/e3-livegood.png",
      details: "Идеальное Топливо для Вашего Организма  Когда речь идёт о максимальной производительности, ничто не работает так, как E3! Единственный в своём роде продукт, E3 обладает запатентованной формулой, НАПОЛНЕННОЙ электролитами для гидратации и здоровья клеток, незаменимыми аминокислотами, включая BCAA, для улучшения мышечной массы, бета-аланином для повышения мышечной производительности и снижения усталости, Beta Power для увеличения силы и мощности, Alpha-GPC для улучшения выносливости и силы мышц, Beta-Prime для поддержки физического и психического стресса и Huperzine-A для повышения энергии и внимательности! Заправляйте своё тело продуктом, который изменит способ, которым вы заряжаетесь энергией! Безопасные и натуральные ингредиенты E3 позволяют восполнять силы в любое время, когда требуется дополнительный заряд. Будь то утром, перед тренировкой в спортзале или для борьбы с дневной усталостью — E3 приносит результаты! Наша революционная формула с доказанными ингредиентами для повышения производительности обеспечивает долговременную, чистую энергию как для физической, так и для умственной активности! Все девять незаменимых аминокислот (EAA) для подпитки организма. EAA являются строительными блоками белка и источником энергии для синтеза мышечного белка, а также для производства гормонов, нейротрансмиттеров, ферментов и многих других важных функций организма. BetaPrime — запатентованная матрица ингредиентов, состоящая из экстракта семян ююбы, L-теанина и экстракта семян Celastrus paniculatus. Основная функция — оптимизация эффективности бета-аланина. Бета-аланин — незаменимая аминокислота, играющая роль в выносливости мышц при высокоинтенсивных тренировках. Широко признан всеми профессиональными спортивными ассоциациями, Всемирным антидопинговым агентством и Международным олимпийским комитетом как допустимое средство для повышения производительности. Бета-аланин работает, буферизуя низкий pH, вызывающий мышечную усталость и отказ, тем самым улучшая выносливость и результативность.  Beta Power — натуральный бетаин (триметилглицин), природный компонент из сахарной свёклы, который способствует гидратации клеток через осмос и повышает производительность. Это природный донор метила, что помогает другим клеточным процессам работать лучше. Свёкла — источник диетических нитратов, богатый биофлавоноидами и полифенолами. Свёкла увеличивает уровень оксида азота, мощного вазодилататора, который улучшает циркуляцию и повышает физическую производительность. Alpha-GPC — мощное стимуляторное соединение для мозга, также используемое для улучшения физической активности. Оно способствует высвобождению ацетилхолина, основного нейротрансмиттера, истощаемого при интенсивных тренировках. ИНГРЕДИЕНТ «УМ-К МЫШЦАМ». Huperzine-A регулирует основной нейротрансмиттер организма, ацетилхолин, для улучшения умственной и физической работоспособности. Преимущества E3: Повышение результативности и физической производительности Увеличение энергии Повышение клеточной гидратации Улучшение настроения и антиоксидантной защиты с помощью Beta Prime Улучшение когнитивных функций и скорости обработки информации Снижение возрастной потери мышечной массы",
    },



{
      id: 7,
      name: "Тоник Herbal Radiance с Обогащением",
      category: "Nutrition",
      price: "$11․95",
      originalPrice: "$15․5",
      rating: 5,
      reviews: 7630,
      description: "",
      features: [
        "Глубокое очищение",
        "Сужение пор",
        "Мягкий пилинг",
        "Восстановление pH баланса кожи",

      ],
      image: "/assets/herbal-radiance-5-main.png",
      details: "Освежение, Баланс и Сияние Преобразите свой уход за кожей с помощью Herbal Radiance Enriched Toner — многофункционального средства, разработанного для очищения, балансировки и омоложения вашей кожи. Этот лёгко ароматизированный тоник удаляет все следы грязи, жира и загрязнений для глубокого очищения, одновременно сужая поры. Благодаря способности восстанавливать естественный pH-баланс кожи, он обеспечивает оптимальное здоровье кожи и готовит её к более эффективному впитыванию увлажняющих средств и сывороток, усиливая их действие и оставляя кожу гладкой, сияющей и обновлённой. Мягкий пилинг для сияющей кожи Содержит гликолевую кислоту, этот тоник мягко отшелушивает кожу, открывая более гладкую поверхность с улучшенной текстурой и более ярким, ровным тоном. Он помогает уменьшить видимость мелких морщин, осветлить тёмные пятна и гиперпигментацию, а также способствует яркому, молодому сиянию. Идеально подходит для решения проблем неровной текстуры и тусклости, помогая достичь отполированной и сияющей кожи. Лучшее от природы для сбалансированной красоты Обогащённый смесью растительных экстрактов, включая водяной кресс, шалфей, корень лопуха и плющ, наш тоник успокаивает раздражение, снижает жирность и защищает уровень увлажнённости. Идеально подходит для склонной к высыпаниям или чувствительной кожи, эти растительные компоненты помогают матировать и освежать кожу, одновременно поддерживая здоровый баланс влаги.",
    },



{
      id: 8,
      name: "Мгновенная Молодость",
      category: "Nutrition",
      price: "$14.95",
      originalPrice: "$19․5",
      rating: 5,
      reviews: 10630,
      description: "",
      features: [
        "Выглядите Моложе за Минуты",
        "Сокращение Видимости Морщин",
        "Потрясающие Результаты!",
        "Мгновенный Эффект",
                "Быстро и Эффективно",
      ],
      image: "/assets/instant-youth-new-main.png",
      details: "Мгновенная Молодость Сократите Видимые Признаки Старения за 90 Секунд! Научно разработанная формула Instant Youth быстро и эффективно уменьшает видимые признаки старения, помогая моментально сократить видимость морщин, мешков под глазами и тонких линий, обеспечивая потрясающие результаты менее чем за две минуты! Используйте в любое время! Просто нанесите Instant Youth на участки кожи, где хотите уменьшить видимость морщин и линий, дайте высохнуть и увидьте результаты почти мгновенно!",
    },

{
      id: 9,
      name: "Мгновенная Молодость",
      category: "Nutrition",
      price: "$14.95",
      originalPrice: "$19․5",
      rating: 5,
      reviews: 9828,
      description: "",
      features: [
        "VitaGlow Увлажняющий Крем",
        "Глубокое увлажнение и восстановление",
        "Успокаивает и смягчает кожу",
        "Обогащён натуральными растительными компонентами",
      ],
      image: "/assets/vitaglow-main.png",
      details: "Глубокое увлажнение для мягкой и упругой кожи Этот роскошный, но лёгкий увлажняющий крем обеспечивает коже необходимое питание и поддерживает её жизненно важный барьер влаги. Прощайте, сухость и раздражение! Формула последнего поколения оставляет кожу мягкой, упругой и напитанной, с улучшенной текстурой и уменьшенной шелушимостью. Успокаивающий и смягчающий уход Богатый компонентами, полезными для кожи, такими как экстракты морских водорослей и масло голубого лотоса, этот научно разработанный крем помогает успокоить раздражённые участки, обеспечивая сбалансированный и обновлённый цвет лица. Это идеальное средство для сухих участков и покраснений, восстанавливая гармонию кожи и создавая защитный щит против внешних агрессоров. Мощные ингредиенты для здорового сияния Церамиды: укрепляют естественный барьер кожи, удерживают влагу и предотвращают её потерю, обеспечивая более упругую и устойчивую кожу. Масло голубого лотоса: богато антиоксидантами для борьбы со свободными радикалами; увлажняющие и успокаивающие свойства помогают придать коже свежий и обновлённый вид. Экстракты морских водорослей: успокаивают и питают кожу, улучшая общее состояние и создавая более гладкую и ровную текстуру. Преобразите свой уход за кожей с этим мощным увлажняющим кремом, который сочетает в себе увлажнение, защиту и сияние в одной идеальной баночке!",
    },



{
      id: 10,
      name: "Мгновенная Молодость",
      category: "Nutrition",
      price: "$147",
      originalPrice: "$270",
      rating: 5,
      reviews: 7828,
      description: "",
      features: [
        "Набор Максимального Здоровья",
        "Bio-Active Complete Мультивитамин для Мужчин или Женщин",
        "Ultra Magnesium Complex",
        "D3-K2 2000",
                "Factor 4",
        "Organic Super Reds",
        "Essential Aminos Фруктовый Микс / Лимон-Лайм",
        "Probiotic Поддержка ЖКТ",
        "Органический Растительный Протеин",

      ],
      image: "/assets/maximum-wellness-pack_3.png",
      details: "Готовы чувствовать себя лучше каждый день? Пора поставить здоровье на первый план с набором LiveGood Maximum Wellness Pack! Будь то повышение энергии, укрепление иммунитета, улучшение пищеварения или просто общее ощущение бодрости, Maximum Wellness Pack содержит всё, что необходимо для поддержки организма изнутри. С 9 нашими наиболее важными продуктами для здоровья, разработанными для синергетического действия, чтобы вы чувствовали себя наилучшим образом, этот набор идеально подходит для каждого, кто хочет контролировать своё здоровье. Что входит в Maximum Wellness Pack? Bio-Active Complete Мультивитамин Ваш фундамент для оптимального здоровья. Наполнен необходимыми витаминами и минералами, специально подобранными для мужчин или женщин, чтобы восполнить все пробелы в питании, которых не хватает в ежедневном рационе. Ultra Magnesium Complex Магний жизненно важен для выработки энергии, восстановления мышц, здоровья мозга, пищеварительной системы и буквально всех функций организма. Этот научно разработанный комплекс магния способствует здоровью сердца, улучшению качества сна, снижению стресса и многому другому. Витамин D3 с K2 Большинство из нас испытывают дефицит витамина D. Поэтому каждый врач и дерматолог рекомендует ежедневно принимать качественный витамин D. Поддерживая здоровье костей, иммунитет и работу сердца, наш витамин D3 с K2 обеспечивает правильное усвоение кальция и его доставку туда, где он необходим. Factor  4 Идеальный борец с воспалением! Сочетая четыре мощных ингредиента, которые не встречаются вместе ни в одном другом продукте, Factor 4 поддерживает здоровье суставов, сердца и кровообращение, удерживая воспаление под контролем. Organic Super Greens Детоксикация и омоложение организма с помощью органических зелёных суперфудов высочайшего качества. Мощная смесь, включающая спирулину, хлореллу, люцерну, пробиотики и многое другое, поддерживает пищеварение, повышает уровень энергии и способствует щелочному балансу организма. Organic Super Reds Повышайте уровень оксида азота, поддерживайте сердце и кровообращение, улучшайте работу мозга и когнитивные функции, а также сексуальное здоровье и либидо с помощью мощных Organic Super Reds. Essential Aminos Незаменимые аминокислоты необходимы для восстановления мышц, поддержки иммунитета и общего здоровья. Но главное — они защищают ценную сухую мышечную массу. Возможно, это один из самых важных продуктов, который каждый должен использовать ежедневно! Probiotic Gut Support Здоровый кишечник — ключ к сильному иммунитету и правильному пищеварению. Наш Probiotic Gut Support помогает поддерживать сбалансированную микробиоту, обеспечивая хорошее самочувствие изнутри. Organic Plant-Based Protein Питайте мышцы самым чистым растительным протеином. 20 граммов высококачественного растительного протеина в одной порции — идеальный способ подпитать организм и поддерживать здоровье мышц. Ваше здоровье — проще простого Больше не нужно гадать, какие добавки принимать, или использовать множество отдельных продуктов. Maximum Wellness Pack даёт вашему организму всё, что нужно, в одном удобном наборе. От здоровья сердца до поддержки иммунитета, от сухой мышечной массы до здоровья кишечника — мы позаботились обо всём. Заказывайте СЕЙЧАС!",
    },






{
      id: 11,
      name: "Набор для Проб и Экономии",
      category: "Nutrition",
      price: "$279",
      originalPrice: "$395",
      rating: 5,
      reviews: 11259,
      description: "",
      features: [
        "1 Bio-Active Complete Мультивитамин",
        "1 Ultra Magnesium Complex",
        "1 Органический D3-K2 2000",
        "1 Super Greens",
                "1 Super Reds",
        "1 Протеин",
        "1 Органический Кофе",
        "1 E3 – Энергия, Выносливость, Электролиты",
        "1 Essential Aminos",
        "1 Methylene Blue Ноотроп",

      ],
      image: "/assets/sampler-value-pack_5-1.png",
      details: "Набор для Проб и ЭкономииОтличный способ познакомиться с высококачественными продуктами и исключительной ценностью линейки LiveGood. Испытайте 19 самых продаваемых и изменяющих жизнь продуктов LiveGood с ещё большей скидкой от цен для участников! Вы получите по одному экземпляру каждого из следующих продуктов: ✓ Bio-Active Complete Мультивитамин ✓ Витамин D3-K2 2000 ✓ Ultra Magnesium Complex ✓ Органический растительный протеин или изолят сывороточного протеина с колострумом ✓ Organic Super Greens ✓ Organic Super Reds ✓ Органический кофе для контроля веса с грибами ✓ Essential Aminos ✓ Factor 4 Антивоспалительный ✓ Methylene Blue ✓ Collagen Peptides ✓ E3 – Энергия, Выносливость, Электролиты ✓ Creatine + HMB ✓ Патчи для энергии и концентрации ✓ Патчи для сна ✓ Поддержка гормонов – для мужчин или женщин ✓ Probiotic Gut Support ✓ Гималайский Шилажит и органический морской мох ✓ Детокс с хлорофиллом и цеолитом"
    },





{
      id: 11,
      name: "Набор для Ухода за Кожей",
      category: "Nutrition",
      price: "$49.95",
      originalPrice: "$68.25",
      rating: 5,
      reviews: 13589,
      description: "",
      features: [
        "1 VitaGlow Увлажняющий Крем",
        "1 Herbal Radiance Enriched Тоник",
        "1 Instant Youth",
        "1 Ageless Renewal",
                "Сократите признаки старения всего за 90 секунд!",
        "Этот революционный продукт для устранения морщин позволит вам выглядеть на несколько лет моложе всего за несколько минут.",
        
        "Набор для ухода за кожей LiveGood включает ВСЕ 4 наших продукта высочайшего качества",

      ],
      image: "/assets/skin-care-pack-new-tile.png",
      details: "Набор для ухода за кожей LiveGood включает ВСЕ 4 наших высококачественных, чистых продукта для ухода за кожей. Вы получите: Instant Youth – Сократите признаки старения всего за 90 секунд! Этот революционный корректор морщин позволит вам выглядеть на несколько лет моложе всего за несколько минут. Ageless Renewal Anti-Aging Serum – Первый в своём роде продукт, который не только стимулирует естественную регенерацию коллагена в организме, но и содержит натуральные антиоксиданты для более выраженного омолаживающего эффекта, чем любой другой продукт на рынке! VitaGlow Hydrating Moisturizer – Роскошный, но лёгкий увлажняющий крем с церамидами, маслом голубого лотоса и экстрактами морских водорослей, который обеспечивает глубокое увлажнение, питает кожу и поддерживает жизненно важный защитный барьер влаги. Herbal Radiance Enriched Toner – Обогащённый смесью растительных экстрактов, включая водяной кресс, шалфей, корень лопуха и плющ, наш тоник успокаивает раздражение, уменьшает жирность кожи и помогает поддерживать свежий и здоровый баланс влаги.",
    },





    
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-mesh opacity-60"></div>
  <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow"></div>
  <div className="container mx-auto relative z-10 text-center">
    <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
      Продукты для вашего здоровья и активного будущего
    </h1>
<p className="text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
      Инновационные продукты LiveGood помогут вам оставаться сильными, полными энергии и здоровыми каждый день
    </p>
  </div>
</section>


        {/* Icons Scrollable Section */}
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-background border-b border-border/20">
  <div className="container mx-auto">

    <div className="flex gap-4 overflow-x-auto scrollbar-hide py-2 snap-x snap-mandatory">
      {[
        "/assets/gluten-free-icon-new.png",
        "/assets/gmp-certified-icon.png",
        "/assets/keto-friendly-icon.png",
        "/assets/nut-free-icon.png",
        "/assets/soy-free-icon.png",
        "/assets/third-party-tested-icon.png",
        "/assets/vegan-icon.png",
        "/assets/sugar-free-icon.png",
        "/assets/allergen-free-icon.png",
        "/assets/peanuts-free-icon.png",
        "/assets/shellfish-free-icon.png",
        "/assets/egg-free-icon.png",
        "/assets/bse-free-icon.png",
        "/assets/tse-free-icon.png",
        "/assets/preservative-free-icon.png",
        "/assets/gelatin-free-icon.png",
        "/assets/paleo-friendly-icon.png",
        "/assets/artificial-color-free-icon.png",
        "/assets/dairy-free-icon.png",
        "/assets/vegetarian-icon.png",
        "/assets/wheat-free-icon.png",
        "/assets/fda-registered-facility-icon.png",
        "/assets/yeast-free-icon.png",
        "/assets/heavy-metal-tested-icon.png",
        "/assets/icons/icon-guava.png",
      ].map((src, i) => (
        <div
          key={i}
          className="flex-shrink-0 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 snap-start"
        >
          <img
            src={src}
            alt={`Icon ${i + 1}`}
            className="w-10 h-10 object-contain rounded-full"
          />
        </div>
      ))}
    </div>
  </div>
</section>



        {/* Products Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/5 relative overflow-hidden">
          <div className="container mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-gradient-glass backdrop-blur-sm rounded-3xl overflow-hidden shadow-elegant hover:shadow-deep transition-all duration-700 border border-border/20 hover:border-primary/30"
              >
                <div className="relative h-82 flex items-center justify-center overflow-hidden rounded-t-3xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    {product.category}
                  </Badge>
                  <div className="absolute top-4 right-4 bg-primary-foreground/90 text-primary px-3 py-1 rounded-full text-sm font-bold">
                    Save 75%
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-400">
                      {"★".repeat(Math.floor(product.rating))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-primary">
                        {product.price}
                      </span>
                      <span className="text-lg text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 py-3 rounded-full font-semibold hover:scale-105"
                    onClick={() => setSelectedProduct(product)}
                  >
Больше информации                  </Button>
                </div>
              </div>
              
            ))}
            
          </div>
          
        </section>

        {/* Popup Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-background p-8 rounded-2xl shadow-elegant max-w-2xl w-full relative overflow-y-auto max-h-[90vh]">
              <button
                className="absolute top-4 right-4 text-2xl font-bold hover:text-red-500"
                onClick={() => setSelectedProduct(null)}
              >
                &times;
              </button>
              <h3 className="text-3xl font-bold mb-4">
                {selectedProduct.name}
              </h3>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-auto max-h-96 object-contain mb-4 rounded-xl"
              />
              <p className="text-muted-foreground mb-4">
                {selectedProduct.description}
              </p>
              <ul className="mb-4 list-disc pl-5 text-muted-foreground">
                {selectedProduct.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              {selectedProduct.details && (
                <div className="mb-4">
                  <h4 className="font-semibold text-lg">Подробнее:</h4>
                  <p className="text-muted-foreground">{selectedProduct.details}</p>
                </div>
              )}

              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary">
                  {selectedProduct.price}
                </span>
                <Button
                  className="bg-accent text-accent-foreground hover:bg-accent/90 py-2 px-6 rounded-full"
                  onClick={() => alert("Added to cart!")}
                >
                  Buy Now
                </Button>
              </div>
            </div>
            
          </div>
        )}

        {/* Why Choose Our Products */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
          <div className="container mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 bg-gradient-primary bg-clip-text text-transparent">
Преимущества качества продукции LiveGood            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Сертификато GMP", description: "Все Продукты производятся по стандартам GMP GMP, что гарантирует высочайшие стандарты безопасности․", icon: "🏆" },
                { title: "Доступные Цены", description: "Продукты предлагаются по конкурентоспособной цене при высокой качестве", icon: "💰" },
                { title: "Лабораторно Проверено", description: "Каждый продукт проходит лабораторное тестирование", icon: "🔬" },
                { title: "Доверие Клиентов", description: "Миллионы людей доверяют продуктам LiveGood", icon: "🌍" },
              ].map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-gradient-glass backdrop-blur-sm rounded-2xl border border-border/20 shadow-soft hover:shadow-elegant transition-all duration-300">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
            
          </div>
          
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero relative overflow-hidden">
          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-8">
Начни своё здоровое будущее прямо сейчас            </h2>
            <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
              Свяжитесь с нами, чтобы воспользоваться всеми преимуществами LiveGood и специальными скидками
            </p>
            <Button
  size="lg"
  className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-deep transition-all duration-500 text-xl px-12 py-6 rounded-full shadow-elegant hover:scale-105"
  onClick={() => window.location.href = "https://www.livegood.com/shop"} // այստեղ փոխիր հասցեն ըստ անհրաժեշտության
>
Больше товаров</Button>

          </div>
        </section>
      </main>

      <Footer />
      <ChatbotSlideIn />
    </div>
  );
};

export default Services;