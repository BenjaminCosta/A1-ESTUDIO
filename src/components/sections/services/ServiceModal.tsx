import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Service, ServiceModalContent } from "@/components/data/services";

type Props = {
  service: Service;
  onClose: () => void;
};

// ── Tabbed layout (Aperturas, Negocios) ─────────────────────
function TabbedContent({ modal }: { modal: Extract<ServiceModalContent, { layout: "tabbed" }> }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      {/* Tab nav */}
      <div className="mb-7 flex flex-wrap border-b border-paper/10 md:mb-8">
        {modal.tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(i)}
            className={`border-b-2 pb-3.5 pr-5 font-nav text-[10px] font-bold uppercase tracking-[0.24em] transition-colors duration-200 md:pr-7 md:tracking-[0.28em] ${
              activeTab === i
                ? "text-paper border-coral"
                : "text-paper/35 border-transparent hover:text-paper/65"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Tab items */}
      <ul className="space-y-4">
        {modal.tabs[activeTab].items.map((item) => (
          <li key={item} className="flex items-start gap-3.5 md:gap-4">
            <span className="mt-2.25 h-px w-4 bg-coral shrink-0" />
            <span className="font-body text-[17px] leading-snug text-paper/65 md:text-lg">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Simple block layout (all other services) ─────────────────
function SimpleContent({ modal }: { modal: Extract<ServiceModalContent, { layout: "simple" }> }) {
  return (
    <div>
      {modal.blocks.map((block) => (
        <div key={block.heading} className="mb-8 md:mb-10">
          <p className="eye mb-5">{block.heading}</p>
          <ul className="space-y-4">
            {block.items.map((item) => (
              <li key={item} className="flex items-start gap-3.5 md:gap-4">
                <span className="mt-2.25 h-px w-4 bg-coral shrink-0" />
                <span className="font-body text-[17px] leading-snug text-paper/65 md:text-lg">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {/* For whom */}
      <div className="border border-paper/10 px-5 py-5 md:px-6">
        <p className="eye mb-3">Para quién es</p>
        <p className="font-body text-[17px] leading-relaxed text-paper/50">{modal.forWhom}</p>
      </div>
    </div>
  );
}

// ── Main modal ───────────────────────────────────────────────
export function ServiceModal({ service, onClose }: Props) {
  const [visible, setVisible] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Entrance animation — trigger on next frame after mount
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setVisible(true);
      closeButtonRef.current?.focus();
    });
    return () => cancelAnimationFrame(id);
  }, []);

  // Exit animation → then unmount
  const close = useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 370);
  }, [onClose]);

  // ESC key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [close]);

  // Scroll lock
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const transitionBase = "opacity 370ms ease, transform 370ms cubic-bezier(0.23,1,0.32,1)";

  return createPortal(
    <>
      {/* ── Backdrop ──────────────────────────────────── */}
      <div
        aria-hidden
        onClick={close}
        style={{ opacity: visible ? 1 : 0, transition: "opacity 370ms ease" }}
        className="fixed inset-0 z-59 bg-ink/82"
      />

      {/* ── Modal panel ───────────────────────────────── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Servicio: ${service.name}`}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transition: transitionBase,
        }}
        className="fixed inset-0 z-60 flex flex-col overflow-hidden md:inset-6 md:flex-row"
      >
        {/* ── Left: image (50%) ─────────────────────── */}
        <div className="relative h-[34vh] shrink-0 overflow-hidden bg-ink sm:h-[38vh] md:h-auto md:w-[46%] xl:w-1/2">
          <img
            src={service.img}
            alt=""
            className="absolute inset-0 h-full w-full object-cover contrast-[1.12] saturate-[1.2]"
          />
          {/* Bottom gradient for number readability */}
          <div className="absolute inset-0 bg-linear-to-t from-ink/60 via-transparent to-transparent pointer-events-none" />
          {/* Service number on image */}
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-5 left-6 select-none font-display font-black leading-none text-white/12"
            style={{ fontSize: "clamp(56px, 8vw, 110px)" }}
          >
            {service.n}
          </span>
          {/* Mobile close */}
          <button
            onClick={close}
            className="md:hidden absolute top-4 right-4 z-10 h-9 w-9 flex items-center justify-center bg-ink/60 border border-paper/20 text-paper font-nav text-xs font-bold hover:bg-coral transition-colors duration-200"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        {/* ── Right: content (55%) ──────────────────── */}
        <div className="relative flex-1 overflow-y-auto bg-ink px-6 py-7 md:px-10 md:py-10 lg:px-12 xl:px-14 xl:py-14">
          {/* Desktop close */}
          <button
            ref={closeButtonRef}
            onClick={close}
            className="absolute right-8 top-7 hidden items-center gap-2.5 font-nav text-[10px] font-bold uppercase tracking-[0.3em] text-paper/35 transition-colors duration-200 hover:text-paper md:flex xl:right-11 xl:top-8"
            aria-label="Cerrar"
          >
            <span>Cerrar</span>
            <span className="text-sm leading-none">✕</span>
          </button>

          {/* Watermark number (desktop) */}
          <span
            aria-hidden
            className="pointer-events-none absolute right-8 top-8 hidden select-none font-display font-black leading-none text-paper/4 md:block xl:right-10 xl:top-10"
            style={{ fontSize: "clamp(110px, 13vw, 210px)" }}
          >
            {service.n}
          </span>

          {/* Content */}
          <div className="relative z-10 max-w-xl">
            {/* Eyebrow */}
            <p className="eye mb-6">{service.cat}</p>

            {/* Title */}
            <h2
              className="display text-paper mb-5"
              style={{
                fontSize: "clamp(48px, 5.8vw, 102px)",
                lineHeight: 0.84,
                letterSpacing: "-0.02em",
              }}
            >
              {service.name}
            </h2>

            {/* Coral rule */}
            <div className="h-px w-10 bg-coral mb-8" />

            {/* Intro */}
            <p className="mb-9 font-body text-lg leading-[1.68] text-paper/55 md:mb-10 md:text-[19px] md:leading-[1.72]">
              {service.modal.intro}
            </p>

            {/* Dynamic content */}
            {service.modal.layout === "tabbed" && <TabbedContent modal={service.modal} />}
            {service.modal.layout === "simple" && <SimpleContent modal={service.modal} />}

            {/* CTA */}
            <div className="mt-10 border-t border-paper/10 pt-8 md:mt-12 md:pt-10">
              <a href="#cta" onClick={close} className="btn btn-w">
                Hablemos de tu proyecto →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
}
