"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextAbout from '@/components/sections/about/TextAbout';
import { Building, Calendar, Feather, Leaf, Smile } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="largeSmallSizeLargeTitles"
        background="fluid"
        cardStyle="layered-gradient"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Главная",          id: "#home"},
        {
          name: "О нас",          id: "#about"},
        {
          name: "Услуги",          id: "#features"},
        {
          name: "Продукция",          id: "#products"},
        {
          name: "Отзывы",          id: "#testimonials"},
        {
          name: "Контакты",          id: "#contact"},
      ]}
      brandName="Камни Всем"
      button={{
        text: "Заказать"}}
      topBarButton={{
        text: "89673528481",        href: "tel:89673528481"
      }}
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitDoubleCarousel
      background={{
        variant: "radial-gradient"}}
      title="Натуральные Камни для Вашего Проекта"
      description="Откройте для себя красоту и долговечность природного камня для дизайна домов, ландшафта, строительства и облицовки. Мы предлагаем широкий ассортимент и быструю доставку."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/plant-vases-background-zoom-calls_23-2149684464.jpg",          imageAlt: "Luxurious marble kitchen countertop"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-cookie-tray-leaves-marble-background_114579-51601.jpg",          imageAlt: "Polished quartz countertop"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cement-walkway-garden_1252-1022.jpg",          imageAlt: "Onyx translucent bar countertop"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/spring-flowers-with-bunch-rocks-arrangement_23-2148822228.jpg",          imageAlt: "Luxurious marble kitchen countertop"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cool-background-blank-wallpaper-place-your-concept_1194-641453.jpg",          imageAlt: "Polished quartz countertop"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/traditional-delicious-gulas-dish-arrangement_23-2149072569.jpg",          imageAlt: "Onyx translucent bar countertop"},
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/outdoors-abstract-shadow-daytime_23-2149080293.jpg",          imageAlt: "Granite bathroom vanity top"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/modern-sliding-drawers-with-stone-cladding-exquisite-furniture-design-living-room_169016-72774.jpg",          imageAlt: "Slate flooring in a modern living room"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/view-ancient-greek-architecture-with-temple-structure_23-2151664806.jpg",          imageAlt: "Quartzite outdoor kitchen countertop"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/park-china_1127-3736.jpg",          imageAlt: "Granite bathroom vanity top"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/geometric-building-facade-with-sunlight-shadows_23-2152032129.jpg",          imageAlt: "Slate flooring in a modern living room"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cement-background-crossed-by-diagonal-line-pebbles-stone_158595-6386.jpg",          imageAlt: "Quartzite outdoor kitchen countertop"},
      ]}
      tag="Камни Всем"
      buttons={[
        {
          text: "Посмотреть Каталог",          href: "#products"},
        {
          text: "Связаться с Нами",          href: "#contact"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      tag="О Компании"
      title="Ваш надежный партнер в мире натурального камня"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Дизайн и Облицовка Интерьеров",          description: "Преобразите ваше пространство с помощью мрамора, гранита и оникса. Идеально для столешниц, полов и стен.",          icon: Feather,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/town-square-shenzhen_1359-1110.jpg",              imageAlt: "Modern interior design with stone walls"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/modern-kitchen-with-contemporary-interior-decor-furnishings_23-2150886672.jpg",              imageAlt: "Luxury kitchen with marble island"},
          ]
        },
        {
          title: "Ландшафтный Дизайн",          description: "Создайте уникальный ландшафт с нашим широким выбором декоративных камней, гальки и плитняка.",          icon: Leaf,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/balance-stone-quiet-temple-background_1372-102.jpg",              imageAlt: "Stone pathway in a beautiful garden"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/minimalist-courtyard-design_23-2151934193.jpg",              imageAlt: "Outdoor patio with stone paving"},
          ]
        },
        {
          title: "Строительство и Фасады",          description: "Используйте натуральный камень для долговечных фундаментов, стен и эффектных фасадных решений.",          icon: Building,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/old-brick-wall-with-stones_23-2147625861.jpg",              imageAlt: "Construction of a stone wall"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/old-weathered-brick-wall_23-2147625933.jpg",              imageAlt: "Skilled mason carving stone"},
          ]
        },
      ]}
      title="Наши Услуги"
      description="Мы предлагаем полный спектр услуг по выбору, доставке и консультации по применению натурального камня."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "marble",          name: "Мрамор",          price: "от 5000 ₽/м²",          imageSrc: "http://img.b2bpic.net/free-photo/abstract-white-marble_74190-7086.jpg",          imageAlt: "White marble slab"},
        {
          id: "granite",          name: "Гранит",          price: "от 4000 ₽/м²",          imageSrc: "http://img.b2bpic.net/free-photo/grained-light-gray-stucco_1194-6573.jpg",          imageAlt: "Dark grey granite slab"},
        {
          id: "quartzite",          name: "Кварцит",          price: "от 6000 ₽/м²",          imageSrc: "http://img.b2bpic.net/free-photo/still-life-putting-up-decorative-vinyls_23-2149683452.jpg",          imageAlt: "Beige quartzite stone"},
        {
          id: "slate",          name: "Сланец",          price: "от 3500 ₽/м²",          imageSrc: "http://img.b2bpic.net/free-photo/photo-wall-texture-pattern_58702-14597.jpg",          imageAlt: "Dark grey slate tile"},
        {
          id: "travertine",          name: "Травертин",          price: "от 4500 ₽/м²",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-abstract-marble-texture-composition_23-2149016770.jpg",          imageAlt: "Light beige travertine tile"},
        {
          id: "onyx",          name: "Оникс",          price: "от 8000 ₽/м²",          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-natural-marble-texture_23-2149091277.jpg",          imageAlt: "Translucent green onyx slab"},
      ]}
      title="Наш Каталог Камней"
      description="Исследуйте наш обширный ассортимент натуральных камней, каждый из которых обладает уникальной красотой и свойствами."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "years",          value: "15+",          title: "Лет на рынке",          description: "Опыт и доверие клиентов",          icon: Calendar,
        },
        {
          id: "projects",          value: "500+",          title: "Реализованных Проектов",          description: "От небольших домов до крупных объектов",          icon: Building,
        },
        {
          id: "clients",          value: "200+",          title: "Довольных Клиентов",          description: "Приверженность качеству и сервису",          icon: Smile,
        },
      ]}
      title="Наши Достижения в Цифрах"
      description="Гордимся многолетним опытом и сотнями успешно реализованных проектов."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          title: "Превосходное Качество и Сервис",          quote: "«Камни Всем» превзошли все наши ожидания. Камень был доставлен вовремя, а качество просто потрясающее. Очень рекомендую!",          name: "Анна Смирнова",          role: "Дизайнер интерьеров",          imageSrc: "http://img.b2bpic.net/free-photo/happy-professional-architecture-holding-clipboard-construction-site_23-2148204025.jpg",          imageAlt: "Анна Смирнова"},
        {
          id: "2",          title: "Идеально для Ландшафтного Дизайна",          quote: "Нашли именно то, что искали для нашего сада. Сотрудники очень помогли с выбором, и доставка была быстрой и аккуратной.",          name: "Игорь Петров",          role: "Владелец загородного дома",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-christmas-time-home-concept_23-2148730786.jpg",          imageAlt: "Игорь Петров"},
        {
          id: "3",          title: "Надежный Поставщик для Строительства",          quote: "Работаем с «Камни Всем» уже несколько лет. Всегда стабильное качество и своевременные поставки, что критично для наших проектов.",          name: "Сергей Козлов",          role: "Прораб строительной компании",          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-engineers-hand-shake_23-2148480373.jpg",          imageAlt: "Сергей Козлов"},
        {
          id: "4",          title: "Широкий Выбор и Профессионализм",          quote: "Потрясающий ассортимент камней, и консультанты действительно знают свое дело. Помогли подобрать идеальный камень для облицовки фасада.",          name: "Елена Морозова",          role: "Архитектор",          imageSrc: "http://img.b2bpic.net/free-photo/young-man-t-shirt-jacket-holding-gift-box-looking-excited-front-view_176474-58055.jpg",          imageAlt: "Елена Морозова"},
        {
          id: "5",          title: "Просто Отлично!",          quote: "Все на высшем уровне — от заказа до получения. Камни выглядят великолепно, и мы очень довольны результатом.",          name: "Дмитрий Волков",          role: "Частный заказчик",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-male-builder-yellow-helmet-holding-big-white-sign-light-background_140725-26794.jpg",          imageAlt: "Дмитрий Волков"},
      ]}
      title="Что Говорят Наши Клиенты"
      description="Мы стремимся к совершенству и рады получать положительные отзывы о нашей работе."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "СтройГрад",        "ЛандшафтМастер",        "ДизайнСтудия Арт",        "ГК Фундамент",        "Архитектура+Дизайн",        "Премиум Дома",        "ЭкоСтройПроект"]}
      title="Нам Доверяют Ведущие Компании"
      description="Мы гордимся сотрудничеством с лидерами рынка в сфере строительства, дизайна и ландшафтных работ."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",          title: "Как выбрать подходящий камень для моего проекта?",          content: "Выбор камня зависит от его назначения. Наши специалисты готовы проконсультировать вас по всем вопросам, учитывая ваши эстетические предпочтения и требования к функциональности. Свяжитесь с нами, чтобы получить индивидуальную консультацию."},
        {
          id: "faq-2",          title: "Вы осуществляете доставку камня?",          content: "Да, мы осуществляем доставку натурального камня по всей территории. Условия доставки обсуждаются индивидуально, чтобы обеспечить максимальное удобство для наших клиентов."},
        {
          id: "faq-3",          title: "Какие виды натурального камня вы предлагаете?",          content: "В нашем каталоге представлены мрамор, гранит, кварцит, сланец, травертин, оникс и многие другие виды камня, подходящие для самых разных целей."},
        {
          id: "faq-4",          title: "Можно ли заказать образец камня?",          content: "Да, мы предоставляем образцы камня, чтобы вы могли оценить его текстуру и цвет в условиях вашего объекта перед оформлением основного заказа."},
        {
          id: "faq-5",          title: "Вы оказываете услуги по монтажу или обработке камня?",          content: "Мы специализируемся на продаже и доставке камня. Однако мы можем порекомендовать проверенных партнеров для монтажа и обработки, если это необходимо для вашего проекта."},
      ]}
      title="Часто Задаваемые Вопросы"
      description="Найдите ответы на наиболее распространенные вопросы о нашей продукции и услугах."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient"}}
      tag="Свяжитесь с Нами"
      title="Начните Ваш Проект Сегодня"
      description="Оставьте свои контактные данные, и мы свяжемся с вами, чтобы обсудить ваши потребности и предложить лучшие решения."
      inputPlaceholder="Ваш email"
      buttonText="Отправить Заявку"
      termsText="Нажимая «Отправить Заявку», вы соглашаетесь с нашей Политикой конфиденциальности."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Камни Всем"
      columns={[
        {
          title: "Компания",          items: [
            {
              label: "О нас",              href: "#about"},
            {
              label: "Услуги",              href: "#features"},
            {
              label: "Контакты",              href: "#contact"},
          ],
        },
        {
          title: "Продукция",          items: [
            {
              label: "Каталог",              href: "#products"},
            {
              label: "Мрамор",              href: "#products"},
            {
              label: "Гранит",              href: "#products"},
          ],
        },
        {
          title: "Поддержка",          items: [
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Политика конфиденциальности",              href: "#"},
            {
              label: "Условия использования",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2024 Камни Всем. Все права защищены."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
