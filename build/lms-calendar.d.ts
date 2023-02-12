import { LitElement, nothing } from 'lit';
import './components/Header.js';
import LMSCalendarHeader from './components/Header';
import './components/Month.js';
import LMSCalendarMonth from './components/Month';
import './components/Day.js';
import LMSCalendarDay from './components/Day';
import './components/Context.js';
import LMSCalendarContext from './components/Context';
import './components/Entry.js';
import LMSCalendarEntry from './components/Entry';
export default class LMSCalendar extends LitElement {
    heading: string;
    activeDate: CalendarDate;
    entries: CalendarEntry[];
    color: string;
    _expandedDate?: CalendarDate;
    _viewportWidth: number;
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    _setLocale(): Promise<void>;
    _handleSwitchDate(e: CustomEvent): void;
    _handleSwitchView(e: CustomEvent): void;
    _handleExpand(e: CustomEvent): void;
    _getEntries(): import("lit-html").TemplateResult<1>[] | typeof nothing;
    _getEntriesByDate(): import("lit-html").TemplateResult<1>[] | undefined;
    _getGridSlotByTime({ start, end }: CalendarTimeInterval): string;
    _getWidthByGroupSize({ grading, index }: {
        grading: Grading[];
        index: number;
    }): number;
    _getOffsetByDepth({ grading, index }: {
        grading: Grading[];
        index: number;
    }): number;
    _getPartitionedSlottedItems(items: CalendarEntry[]): Interval[][];
    _getDaysRange(date: CalendarDateInterval): [Date, Date, number];
}
declare global {
    interface HTMLElementTagNameMap {
        'lms-calendar': LMSCalendar;
        'lms-calendar-header': LMSCalendarHeader;
        'lms-calendar-month': LMSCalendarMonth;
        'lms-calendar-day': LMSCalendarDay;
        'lms-calendar-context': LMSCalendarContext;
        'lms-calendar-entry': LMSCalendarEntry;
    }
    interface CalendarDate {
        day: number;
        month: number;
        year: number;
    }
    interface CalendarDateInterval {
        start: CalendarDate;
        end: CalendarDate;
    }
    interface CalendarTime {
        hours: number;
        minutes: number;
    }
    interface CalendarTimeInterval {
        start: CalendarTime;
        end: CalendarTime;
    }
    interface CalendarEntry {
        date: CalendarDateInterval;
        time: CalendarTimeInterval;
        heading: string;
        content: string;
        color: string;
    }
    interface Interval {
        start: number;
        end: number;
    }
    interface Grading {
        index: number;
        depth: number;
        group: number;
    }
    interface Partition {
        index: number | undefined;
        depth: number | undefined;
        group: number | undefined;
        start: number;
        end: number;
    }
}
//# sourceMappingURL=lms-calendar.d.ts.map