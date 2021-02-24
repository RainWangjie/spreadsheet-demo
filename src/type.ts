// 单元格定义
export interface ICell {
  // 单元格类型
  cellType: {
    fa: 'number' | 'string' | 'date';
    t: any;
  };
  // 显示值
  monitor: string;
  // 原始值
  value: any;
  // 合并单元格
  mergeCell: {
    r: number;
    c: number;
  };
}
