package com.example.serialization;

import com.example.model.PagePingEvent;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.streams.processor.TimestampExtractor;

public class EventTimestampExtractor implements TimestampExtractor {
  @Override
  public long extract(ConsumerRecord<Object, Object> consumerRecord, long partitionTime) {
    PagePingEvent event = (PagePingEvent) consumerRecord.value();
    return event.getCollectorTimestamp().toEpochMilli();
  }
}
