import { range } from 'lodash'
import Select from 'components/select'
import Option from 'components/select/components/option'

export default function CompoundComponent() {
  return (
    <div className="p-4">
      <Select>
        {range(10).map((item) => (
          <Option key={item} value={item.toString()} label={`Item ${item + 1}`} />
        ))}
      </Select>
    </div>
  )
}
