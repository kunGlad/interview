import { useState, useEffect } from "react";
import MiniDB from "./dbStoreUtils";

const IndexDB = () => {
  const [data, setData] = useState<any>(null);
  const [allData, setAllData] = useState<any[]>([]);

  // 加载所有数据
  const loadAllData = async () => {
    try {
      const data = await MiniDB.getAll();
      setAllData(data);
      console.log("所有数据:", data);
    } catch (error) {
      console.error("加载数据失败:", error);
    }
  };

  // 组件加载时获取数据
  useEffect(() => {
    loadAllData();
  }, []);

  const handleAdd = async () => {
    try {
      // 使用 Date.now() 生成唯一ID，避免重复
      const id = Date.now();
      await MiniDB.add({
        name: "test",
        id: id,
        time: new Date().toISOString(),
      });
      await loadAllData(); // 重新加载数据
    } catch (error: any) {
      console.error("添加错误:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const key = allData[0].id;
      await MiniDB.delete(key);
      await loadAllData();
    } catch (error: any) {}
  };

  const handlePut = async () => {
    try {
      const key = allData[0].id;
      const existing = await MiniDB.get(key);
      if (existing) {
        await MiniDB.update({ ...existing, name: "啦啦啦啦啦啦", id: key });
      } else {
        await MiniDB.add({ name: "啦啦啦啦啦啦", id: 1 });
      }
      await loadAllData();
    } catch (error: any) {}
  };

  const handleQuery = async () => {
    try {
      const key = allData[0].id;
      const result = await MiniDB.get(key);
      setData(result);
    } catch (error: any) {}
  };

  const handleClear = async () => {
    try {
      await MiniDB.clear();
      setData(null);
      setAllData([]);
    } catch (error: any) {}
  };

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <p>
          <strong>当前数据：</strong>
          {JSON.stringify(data)}
        </p>
        <p>
          <strong>所有数据：</strong>
        </p>
        <ul>
          {allData.map((item) => (
            <li key={item.id}>
              ID: {item.id}, 名称: {item.name}, 时间: {item.time}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button onClick={handleAdd}>新增数据（唯一ID）</button>
        <button onClick={handleDelete}>删除第一条的数据</button>
        <button onClick={handlePut}>新增/修改第一条的数据</button>
        <button onClick={handleQuery}>查询第一条的数据</button>
        <button onClick={handleClear}>清空表</button>
        <button onClick={loadAllData}>刷新数据</button>
      </div>
    </div>
  );
};

export default IndexDB;
