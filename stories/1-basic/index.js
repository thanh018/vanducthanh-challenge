import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import AutoComplete from './AutoComplete';
import Avatar from './Avatar';
import Badge from './Badge';
import Button from './Button';
import Carousel from './Carousel';
import Checkbox from './Checkbox';
import ConfirmButton from './ConfirmButton';
import DateFormatter from './DateFormatter';
import DatePicker from './DatePicker';
import Donut from './Donut';
import Dropdown from './Dropdown';
import Drawer from './Drawer';
import Email from './Email';
import Editor from './Editor';
import Form from './Form';
import Grid from './Grid';
import Image from './Image';
import Input from './Input';
import Link from './Link';
import List from './List';
import Layout from './Layout';
import MathFormula from './MathFormula';
import Menu from './Menu';
import Modal from './Modal';
import Notification from './Notification';
import Number from './Number';
import Panel from './Panel';
import Paragraph from './Paragraph';
import Password from './Password';
import RadioGroup from './RadioGroup';
import ReorderTable from './ReorderTable';
import Search from './Search';
import Select from './Select';
import Switch from './Switch';
import Sticky from './Sticky';
import Spinner from './Spinner';
import Table from './Table';
import EditableTable from './EditableTable';
import Tabs from './Tabs';
import TableFooter from './TableFooter';
import Tag from './Tag';
import Text from './Text';
import Title from './Title';
import TextArea from './TextArea';
import Thumbnail from './Thumbnail';
import Tooltip from './Tooltip';
import Transfer from './Transfer';
import Tree from './Tree';

storiesOf('Basic Components', module)
  .addDecorator(withKnobs)
  .add('AutoComplete', AutoComplete, AutoComplete.options)
  .add('Avatar', Avatar, Avatar.options)
  .add('Badge', Badge, Badge.options)
  .add('Button', Button, Button.options)
  .add('Carousel', Carousel, Carousel.options)
  .add('Checkbox', Checkbox, Checkbox.options)
  .add('ConfirmButton', ConfirmButton)
  .add('DateFormatter', DateFormatter, DateFormatter.options)
  .add('DatePicker', DatePicker, DatePicker.options)
  .add('Donut', Donut)
  .add('Dropdown', Dropdown, Dropdown.options)
  .add('Drawer', Drawer, Drawer.options)
  .add('Email', Email, Email.options)
  .add('Editor', Editor, Editor.options)
  .add('Form', Form, Form.options)
  .add('Grid', Grid, Grid.options)
  .add('Image', Image)
  .add('Input', Input, Input.options)
  .add('Link', Link, Link.options)
  .add('Layout', Layout, Layout.options)
  .add('List', List, List.options)
  .add('Menu', Menu, Menu.options)
  .add('MathFormula', MathFormula, MathFormula.options)
  .add('Modal', Modal, Modal.options)
  .add('Notification', Notification, Notification.options)
  .add('Number', Number, Number.options)
  .add('Panel', Panel)
  .add('Paragraph', Paragraph, Paragraph.options)
  .add('Password', Password, Password.options)
  .add('RadioGroup', RadioGroup, RadioGroup.options)
  .add('ReorderTable', ReorderTable, ReorderTable.options)
  .add('Search', Search, Search.options)
  .add('Select', Select, Select.options)
  .add('Switch', Switch, Switch.options)
  .add('Sticky', Sticky)
  .add('Spinner', Spinner, Spinner.options)
  .add('Table', Table, Table.options)
  .add('EditableTable', EditableTable)
  .add('Tabs', Tabs, Tabs.options)
  .add('TableFooter', TableFooter, TableFooter.options)
  .add('Tag', Tag)
  .add('Text', Text, Text.options)
  .add('Title', Title, Title.options)
  .add('TextArea', TextArea, TextArea.options)
  .add('Thumbnail', Thumbnail, Thumbnail.options)
  .add('Tooltip', Tooltip, Tooltip.options)
  .add('Transfer', Transfer, Transfer.options)
  .add('Tree', Tree, Tree.options);
