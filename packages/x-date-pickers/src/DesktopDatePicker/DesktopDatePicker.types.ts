import { MakeOptional } from '@mui/x-internals/types';
import {
  UseDesktopPickerSlots,
  ExportedUseDesktopPickerSlotProps,
  DesktopOnlyPickerProps,
} from '../internals/hooks/useDesktopPicker';
import {
  BaseDatePickerProps,
  BaseDatePickerSlots,
  BaseDatePickerSlotProps,
} from '../DatePicker/shared';
import { DateView, PickerValidDate } from '../models';
import { ExportedYearCalendarProps } from '../YearCalendar/YearCalendar.types';

export interface DesktopDatePickerSlots<TDate extends PickerValidDate>
  extends BaseDatePickerSlots<TDate>,
    MakeOptional<UseDesktopPickerSlots<TDate, DateView>, 'field' | 'openPickerIcon'> {}

export interface DesktopDatePickerSlotProps<
  TDate extends PickerValidDate,
  TEnableAccessibleFieldDOMStructure extends boolean,
> extends BaseDatePickerSlotProps<TDate>,
    ExportedUseDesktopPickerSlotProps<TDate, DateView, TEnableAccessibleFieldDOMStructure> {}

export interface DesktopDatePickerProps<
  TDate extends PickerValidDate,
  TEnableAccessibleFieldDOMStructure extends boolean = true,
> extends BaseDatePickerProps<TDate>,
    DesktopOnlyPickerProps,
    ExportedYearCalendarProps {
  /**
   * Overridable component slots.
   * @default {}
   */
  slots?: DesktopDatePickerSlots<TDate>;
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps?: DesktopDatePickerSlotProps<TDate, TEnableAccessibleFieldDOMStructure>;
  /**
   * Years rendered per row.
   * @default 4
   */
  yearsPerRow?: 3 | 4;
}
