
"use client";

import { useState } from "react";
import {FaqItem as Item} from "@/common/utils";

const faqs = [
  {
    question: "Ile kosztuje współpraca SEO?",
    answer: "Koszt zależy od konkurencyjności branży, zakresu działań i stanu wyjściowego strony."
  },
  {
    question: "Jak długo trzeba czekać na efekty SEO?",
    answer: "Pierwsze efekty mogą pojawić się po kilku miesiącach, ale czas zależy od konkurencji i kondycji witryny."
  },
  {
    question: "Czy wdrażasz zalecenia techniczne?",
    answer: "Tak. Oprócz audytu zajmuję się również wdrażaniem zmian technicznych bezpośrednio w kodzie strony."
  },
  {
    question: "Czy współpraca wymaga umowy?",
    answer: "Warunki współpracy ustalamy indywidualnie, w zależności od zakresu i charakteru projektu."
  }
];

export default function FaqList() {
  // Pierwsze pytanie otwarte domyślnie
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setActiveIndex(prev => prev === index ? null : index);
  };

  return (
    <div className="flex flex-col divide-y-3 divide-support-200/15 @container/items">
      {faqs.map((faq, index) => (
        <Item
          key={faq.question}
          question={faq.question}
          answer={faq.answer}
          isExpanded={activeIndex === index}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
}
