import { defineComponent } from 'vue';
import DemoBlock from '@components/DemoBlock/index.vue';
import { Empty } from 'ant-mobile-taro';
import { QuestionCircle } from 'ant-mobile-icon-taro/es/index.vue';

export default defineComponent({
  name: 'EmptyDemo',
  setup() {
    return () => (
      <>
        <DemoBlock title="基础用法" padding="0">
          <Empty />
        </DemoBlock>
        <DemoBlock title="描述文字" padding="0">
          <Empty description="暂无数据" />
        </DemoBlock>
        <DemoBlock title="自定义样式" padding="0">
          <Empty
            style={{ padding: '64px 0' }}
            imageStyle={{ width: '128px' }}
            description="暂无数据"
          />
        </DemoBlock>
        <DemoBlock title="自定义图片" padding="0">
          <Empty
            style={{ padding: '64px 0' }}
            image={<QuestionCircle usePX size={48} color="#ccc" />}
            description="暂无数据"
          />
        </DemoBlock>
        <DemoBlock title="自定义插槽图片" padding="0">
          <Empty style={{ padding: '64px 0' }}>
            {{
              image: () => <QuestionCircle usePX size={48} color="#ccc" />,
              description: () => '暂无数据',
            }}
          </Empty>
        </DemoBlock>
      </>
    );
  },
});
