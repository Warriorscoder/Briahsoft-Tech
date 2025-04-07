import { Link } from "react-router-dom";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "../components/ui/table"
  
  type TableData = {
    name:string,
    Link:string,
    Language:string
  }

  type TableDataProps = {
    Tabledata:TableData[];
  }

  export function TableComponent({Tabledata}:TableDataProps) {
    return (
      <Table>
        <TableCaption>A list of your public Repos.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3">Name</TableHead>
            <TableHead className="w-1/3">Github Link</TableHead>
            <TableHead className="w-1/3">Language</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Tabledata.map((item) => (
            <TableRow key={item.name}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell> <Link to={item.Link}>Click here</Link> </TableCell>
              <TableCell>{item.Language}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{Tabledata[0]?(Tabledata.length - 1):0}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  