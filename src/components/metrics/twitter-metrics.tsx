import { SimpleGrid } from "@chakra-ui/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import type { FC } from "react";
import { useEffect, useState } from "react";

import type { TweetCount } from "../../models/tweet-metric";
import { MetricsApi } from "../../services/metrics-api.service";
import Card from "../card/Card";
import CardContentLoading from "../card/CardContentLoading";

import TwitterTrend from "./twitter-trend";

const TwitterMetrics: FC = () => {
  const [lineraCounts, setLineraCounts] = useState<TweetCount[]>();
  const [moveCounts, setMoveCounts] = useState<TweetCount[]>();
  const [cairoCounts, setCairoCounts] = useState<TweetCount[]>();

  useEffect(() => {
    MetricsApi.fetchTweetCounts("linera").then(setLineraCounts);
    MetricsApi.fetchTweetCounts("move").then(setMoveCounts);
    MetricsApi.fetchTweetCounts("cairo").then(setCairoCounts);
  }, []);

  const renderCard = (data: TweetCount[] | undefined) => {
    return data ? <TwitterTrend values={data} /> : <CardContentLoading />;
  };
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
      <Card>
        <Tabs variant="line" colorScheme="brand">
          <TabList>
            <Tab>#linera</Tab>
            <Tab>#move</Tab>
            <Tab>#cairo</Tab>
          </TabList>

          <TabPanels>
            <TabPanel p={0}>{renderCard(lineraCounts)}</TabPanel>
            <TabPanel p={0}>{renderCard(moveCounts)}</TabPanel>
            <TabPanel p={0}>{renderCard(cairoCounts)}</TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </SimpleGrid>
  );
};
export default TwitterMetrics;
