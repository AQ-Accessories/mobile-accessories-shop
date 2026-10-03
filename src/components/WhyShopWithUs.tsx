import { siteConfig } from '@/config/site';

function WhyIcon({ icon }: { icon: string }) {
  switch (icon) {
    case 'store':
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72l1.189-1.19A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72M6.75 18h3.75a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75z" />
        </svg>
      );
    case 'delivery':
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.079-.504 1.059-1.125a17.908 17.908 0 00-.556-4.814c-.19-.62-.75-1.061-1.394-1.061H15.75M8.25 18.75h6M3.75 9h4.5m-4.5 3h3M3 5.25h5.25M12 9.75L9.75 12 12 14.25" />
        </svg>
      );
    case 'quality':
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      );
    case 'warranty':
      return (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      );
    default:
      return null;
  }
}

export function WhyShopWithUs() {
  return (
    <section className="py-16 sm:py-20 bg-brand-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-primary mb-5">
            Why Shop With Us
          </h2>
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-sm border border-brand-border">
            <p className="text-brand-text-muted leading-relaxed text-sm sm:text-base">
              {siteConfig.physicalShopText}
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.whyShopWithUs.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center p-6 bg-white border border-brand-border rounded-2xl hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-12 h-12 bg-brand-accent/10 text-brand-accent rounded-xl flex items-center justify-center mb-4">
                <WhyIcon icon={item.icon} />
              </div>
              <h3 className="text-base font-semibold text-brand-primary mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-brand-text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
