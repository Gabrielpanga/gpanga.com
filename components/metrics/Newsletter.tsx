import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { Subscribers } from 'lib/types';
import MetricCard from 'components/metrics/Card';

export default function NewsletterCard() {
  // TODO: Will setup a newsletter after the project is done.

  return (<></>);

  const { data } = useSWR<Subscribers>('/api/subscribers', fetcher);

  const subscriberCount = new Number(data?.count);
  const link = 'https://www.getrevue.co/profile/gpanga';

  return (
    <MetricCard
      header="Newsletter Subscribers"
      link={link}
      metric={subscriberCount}
      isCurrency={false}
    />
  );
}
