// * 单元格定义 - 参考LuckySheet
export interface ICell {
  // 单元格类型
  cellType: {
    fa: any; // 格式
    t: 'number' | 'string' | 'date'; // 类型
  };
  // 显示值
  monitor: string;
  // 原始值
  value: any;
  // 合并单元格
  mergeCell?: {
    r: number;
    c: number;
  };
}

export interface ISheetOption {
  id: string;
  name: string;
  // 激活状态 - 1:激活，0：未激活
  status: number;
  // 行数
  row: number;
  // 列数
  column: number;
  // 自定义行高
  defaultRowHeight: number;
  // 自定义列宽
  defaultColWidth: number;
  // 左右滚动条位置
  scrollLeft: number;
  // 上下滚动条位置
  scrollTop: number;
  // 单元格数据
  cellData: ICell[][];
  // 其他配置
  config: {};
}
