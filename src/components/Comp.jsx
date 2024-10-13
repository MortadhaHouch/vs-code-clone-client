import {Panel, PanelGroup, PanelResizeHandle} from "react-resizable-panels"
export default function Comp() {
    return (
        <PanelGroup direction="horizontal">
        <Panel>
          <div className="panel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio animi excepturi dignissimos reprehenderit neque. Nisi autem neque eveniet alias maiores porro mollitia deserunt blanditiis aperiam, omnis expedita eos in doloremque!
          Beatae, suscipit ullam. Nisi, quidem repellendus tempore ad quod dicta porro, labore assumenda distinctio accusamus vitae consequatur dolores ex enim nostrum non, doloremque quia iste asperiores perspiciatis. Cupiditate, illo laudantium.</div>
        </Panel>
        <PanelResizeHandle />
        <Panel>
          <div className="panel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio animi excepturi dignissimos reprehenderit neque. Nisi autem neque eveniet alias maiores porro mollitia deserunt blanditiis aperiam, omnis expedita eos in doloremque!
          Beatae, suscipit ullam. Nisi, quidem repellendus tempore ad quod dicta porro, labore assumenda distinctio accusamus vitae consequatur dolores ex enim nostrum non, doloremque quia iste asperiores perspiciatis. Cupiditate, illo laudantium.</div>
        </Panel>
      </PanelGroup>
    )
}
