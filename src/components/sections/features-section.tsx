import { Truck, RefreshCw, Percent, Headphones } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'Orders from all item',
    colorClass: 'text-primary',
    bgColorClass: 'bg-primary/10'
  },
  {
    icon: RefreshCw,
    title: 'Return & Refund',
    description: 'Money back guarantee',
    colorClass: 'text-chart-2',
    bgColorClass: 'bg-chart-2/10'
  },
  {
    icon: Percent,
    title: 'Member Discount',
    description: 'On every order over $140.00',
    colorClass: 'text-chart-1',
    bgColorClass: 'bg-chart-1/10'
  },
  {
    icon: Headphones,
    title: 'Support 24/7',
    description: 'Contact us 24 hours a day',
    colorClass: 'text-chart-4',
    bgColorClass: 'bg-chart-4/10'
  }
];

export function FeaturesSection() {
  return (
    <section className="py-8 md:py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="border-border/50 shadow-sm hover:shadow-md transition-shadow duration-200 bg-card"
              >
                <CardContent className="p-4 md:p-6 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full ${feature.bgColorClass} mb-3 md:mb-4`}
                  >
                    <IconComponent className={`w-6 h-6 md:w-8 md:h-8 ${feature.colorClass}`} />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-1 md:mb-2 text-sm md:text-base">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
